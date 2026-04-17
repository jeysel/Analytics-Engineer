# Fundos de Investimento — Pipeline Analytics

Pipeline end-to-end para análise de fundos de investimento brasileiros com dados públicos da CVM.

**Stack:** Airflow · Databricks · dbt Core · Looker Studio

---

## Arquitetura

```
CVM Portal (dados.cvm.gov.br)
   ├── cad_fi.csv          → DAG diária  (cadastro de fundos)
   └── inf_diario_YYYYMM   → DAG mensal  (cotas, PL, captação, resgate)
              ↓
       Apache Airflow (Docker)
              ↓
       Databricks DBFS — Bronze (Delta Lake / CSV raw)
              ↓
       dbt Core (conecta via dbt-databricks)
       ├── staging/      → views         (padronização + cast)
       ├── intermediate/ → ephemeral     (filtros + cálculo de rentabilidade)
       └── marts/        → Delta tables  (dims, fato, mart mensal)
              ↓
       Looker Studio (dashboard público via Databricks JDBC)
```

## Modelo Dimensional

```
dim_fundo ──────────────────┐
dim_gestor ─────────────────┤
                            ↓
                   fct_cotas_diarias
              (cota, PL, captação, resgate, cotistas)
                            ↓
                mart_rentabilidade_mensal
          (retorno_mes, retorno_12m, retorno_36m)
```

## Fontes de Dados (CVM — gratuitas, sem autenticação)

| Arquivo | URL | Frequência |
|---|---|---|
| Cadastro de Fundos | `dados.cvm.gov.br/dados/FI/CAD/DADOS/cad_fi.csv` | Diária |
| Informe Diário | `dados.cvm.gov.br/dados/FI/DOC/INF_DIARIO/DADOS/inf_diario_fi_YYYYMM.zip` | Mensal |

## Pré-requisitos

- Docker Desktop
- Python 3.10+
- Databricks Community Edition (conta gratuita)
- dbt-databricks: `pip install dbt-databricks`

## Como Rodar

### 1. Configurar variáveis de ambiente

```bash
cp airflow/.env.example airflow/.env
# Editar airflow/.env com suas credenciais do Databricks
```

### 2. Configurar Databricks (apenas uma vez)

Executar `databricks/setup_bronze.sql` como notebook no Databricks Community para criar os schemas e tabelas bronze.

### 3. Subir o Airflow

```bash
cd airflow
docker compose up -d
# Acessar: http://localhost:8080 (admin / admin)
```

### 4. Configurar dbt

```bash
cp dbt/profiles.yml.example dbt/profiles.yml
# Editar com host, http_path e token do Databricks
cd dbt
dbt deps
dbt debug
```

### 5. Executar pipeline manualmente (opcional)

```bash
# DAGs via UI em http://localhost:8080
# Ou via CLI:
docker exec airflow-scheduler airflow dags trigger dag_cadastro_fundos
docker exec airflow-scheduler airflow dags trigger dag_informe_diario_cvm
```

## Estrutura de Pastas

```
fundos-investimento/
├── airflow/
│   ├── dags/
│   │   ├── dag_cadastro_fundos.py      # DAG diária: CVM → DBFS
│   │   └── dag_informe_diario.py       # DAG mensal: CVM → DBFS → dbt build
│   ├── docker-compose.yml
│   ├── requirements.txt
│   └── .env.example
├── databricks/
│   └── setup_bronze.sql               # Notebook de setup inicial (rodar uma vez)
├── dbt/
│   ├── models/
│   │   ├── staging/                   # Views de padronização
│   │   ├── intermediate/              # Cálculos intermediários (ephemeral)
│   │   └── marts/                     # Dimensões, fato e mart mensal
│   ├── macros/
│   ├── dbt_project.yml
│   └── packages.yml
├── docs/
│   └── architecture.md
└── README.md
```

## Dashboards (Looker Studio)

<!-- link público do Looker Studio após publicação -->
<!-- Exemplo: [Acessar Dashboard](https://lookerstudio.google.com/reporting/ID-AQUI) -->

| Página | Descrição |
|---|---|
| Ranking de Rentabilidade | Top fundos por retorno 12m e 36m por categoria |
| Evolução de Patrimônio | PL por tipo de fundo ao longo do tempo |
| Fluxo Líquido | Captação − Resgate mensal |
| Top Gestores | Ranking por AUM total sob gestão |
| Comparador | Tabela comparativa com filtros por tipo, gestor e período |

<!-- Screenshots do dashboard -->


## Em Produção

Este projeto usa **Databricks Community Edition** para demonstração gratuita. Em um ambiente de produção, as seguintes adaptações seriam necessárias:

| Componente | Community Edition | Produção |
|---|---|---|
| **Execução dbt** | Cluster interativo, iniciado pelo Airflow via REST | Databricks Jobs com schedule nativo |
| **Catálogo** | Schemas manuais (`bronze`, `silver`, `gold`) | Unity Catalog com namespace de 3 níveis |
| **Credenciais** | Variáveis de ambiente via `.env` | Databricks Secrets ou HashiCorp Vault |
| **Cluster** | Derruba automaticamente após 2h de inatividade | Cluster dedicado ou serverless SQL warehouse |
| **Alertas** | Log estruturado no Airflow | Slack/PagerDuty via `on_failure_callback` |
| **CI/CD** | Execução manual | GitHub Actions com `dbt build` em PR |
| **Monitorimento** | DAG logs no Airflow | Databricks Lakehouse Monitoring + dashboards de qualidade |
