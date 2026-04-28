# Arquitetura — Fundos de Investimento

## Visão Geral

Pipeline de analytics end-to-end para fundos de investimento brasileiros.
Dados públicos da CVM, sem autenticação, totalmente automatizável.

```
CVM Portal
   ├── cad_fi.csv          → DAG diária  07:00
   └── inf_diario_YYYYMM   → DAG mensal  dia 01 às 08:00
              ↓
       Apache Airflow (Docker — LocalExecutor)
              ↓
       Databricks DBFS  (/bronze/fundos/)
              ↓
       bronze.cad_fi         (External Table → CSV wildcard)
       bronze.inf_diario     (External Table → CSV wildcard *.csv)
              ↓
       dbt Core (dbt-databricks adapter)
       ├── silver.stg_fundos__cadastro       (view)
       ├── silver.stg_fundos__cotas_diarias  (view)
       ├── [ephemeral] int_fundos__ativos
       ├── [ephemeral] int_fundos__rentabilidade
       ├── gold.dim_fundo                    (Delta table)
       ├── gold.dim_gestor                   (Delta table)
       ├── gold.fct_cotas_diarias            (Delta table — particionada por mês)
       └── gold.mart_rentabilidade_mensal    (Delta table)
              ↓
       Looker Studio (conexão JDBC → Databricks)
```

---

## Fontes de Dados

### CVM — Comissão de Valores Mobiliários

| Arquivo | URL | Schedule |
|---|---|---|
| `cad_fi.csv` | `https://dados.cvm.gov.br/dados/FI/CAD/DADOS/cad_fi.csv` | Diária |
| `inf_diario_fi_YYYYMM.zip` | `https://dados.cvm.gov.br/dados/FI/DOC/INF_DIARIO/DADOS/inf_diario_fi_{YYYYMM}.zip` | Mensal |

**Características:**
- Sem autenticação (dados públicos)
- Encoding: ISO-8859-1
- Delimitador: `;`
- Volume: ~30.000 fundos ativos, informe diário com dezenas de milhões de linhas históricas

---

## Camadas (Medallion Architecture)

### Bronze — Raw
- Localização: `dbfs:/bronze/fundos/`
- Formato: CSV (encoding original ISO-8859-1)
- Tabelas externas no Hive Metastore do Databricks
- Zero transformação — dados exatamente como chegam da CVM

### Silver — Staging (dbt views)
- Schema: `silver`
- Materialização: `view` (não ocupa armazenamento adicional)
- Responsabilidade: renomear colunas, cast de tipos, filtros de nulos básicos
- Modelos: `stg_fundos__cadastro`, `stg_fundos__cotas_diarias`

### Gold — Marts (dbt Delta tables)
- Schema: `gold`
- Materialização: `table` com `file_format = delta`
- Responsabilidade: modelo dimensional + métricas de negócio
- Modelos: `dim_fundo`, `dim_gestor`, `fct_cotas_diarias`, `mart_rentabilidade_mensal`

---

## Modelo Dimensional

### Diagrama

```
dim_gestor (sk_gestor)
      │
      │ cnpj_gestor = cnpj_gestor
      ▼
dim_fundo (sk_fundo) ──────────────────────────┐
      │                                        │
      │ sk_fundo = sk_fundo                    │ sk_fundo = sk_fundo
      ▼                                        ▼
fct_cotas_diarias                  mart_rentabilidade_mensal
  sk_cota (PK)                       sk_rentabilidade_mensal (PK)
  sk_fundo (FK)                      sk_fundo (FK)
  sk_gestor (FK)                     mes_ref
  dt_competencia                     retorno_mes
  vl_cota                            retorno_12m
  vl_pl                              retorno_36m
  vl_captacao                        pl_fim_mes
  vl_resgate                         fluxo_liquido_mes
  fluxo_liquido
  nr_cotistas
  retorno_dia
  retorno_ytd
```

### Granularidade

| Tabela | Granularidade |
|---|---|
| `dim_fundo` | 1 linha por fundo (CNPJ) |
| `dim_gestor` | 1 linha por gestor (CNPJ gestor) |
| `fct_cotas_diarias` | 1 linha por fundo por dia |
| `mart_rentabilidade_mensal` | 1 linha por fundo por mês |

---

## Orquestração (Airflow)

### DAG: `dag_cadastro_fundos`
```
Schedule: 0 7 * * * (diária às 07:00)

download_cadastro_cvm → upload_dbfs_bronze
```

### DAG: `dag_informe_diario_cvm`
```
Schedule: 0 8 1 * * (dia 1 de cada mês às 08:00)

download_informe → upload_dbfs_bronze → start_databricks_cluster → dbt_build → dbt_test
```

### Retry Policy
- 2 retries com intervalo de 10-15 minutos
- Sem email (configurável via Airflow connections)

---

## Configuração do Databricks Community Edition

### HTTP Path (como encontrar)

1. Acessar o cluster no Databricks
2. Aba **Advanced Options** → **JDBC/ODBC**
3. Copiar o campo **HTTP Path**
4. Formato: `/sql/protocolv1/o/<workspace_id>/<cluster_id>`

---

## Decisões de Design

| Decisão | Escolha | Motivo |
|---|---|---|
| Materialization staging | `view` | Evita duplicação de dados; bronze já é a fonte de verdade |
| Materialization intermediate | `ephemeral` | Lógica intermediária sem custo de armazenamento adicional |
| Materialization marts | `table` Delta | Performance para queries do Looker Studio |
| Partição de fct | Por mês (`dt_competencia`) | Queries de período são o padrão do Looker Studio |
| `generate_schema_name` | Schema direto (sem prefixo) | Evita schemas como `prod_gold`; quer `gold` diretamente |
| Filtro `data_inicio_analise` | Variável dbt | Permite dev com janela pequena, prod com histórico completo |
| Encoding bronze | ISO-8859-1 na leitura Spark | CVM entrega neste encoding; Spark converte na criação da tabela |
