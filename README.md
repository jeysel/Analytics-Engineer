# 🎯 Analytics Engineering Portfolio

![dbt](https://img.shields.io/badge/dbt-FF694B?logo=dbt&logoColor=white)
![BigQuery](https://img.shields.io/badge/BigQuery-4285F4?logo=googlecloud&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![Airbyte](https://img.shields.io/badge/Airbyte-615EFF?logo=airbyte&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![Databricks](https://img.shields.io/badge/Databricks-FF3621?logo=databricks&logoColor=white)
![Last Updated](https://img.shields.io/badge/Atualizado-Mar%202026-brightgreen)

**Portfólio profissional com projetos práticos de Analytics Engineering e Dados Públicos (GovTech).**

Foco em modelagem dimensional, transformações SQL, pipelines ELT modernos e data quality.

> 💡 SQL é a linguagem central deste portfólio — os modelos dbt estão nas pastas `/dbt/models` de cada projeto e as queries analíticas em `Scripts-SQL/`.

---

## 🧪 Data Quality

✅ **49 testes automatizados** distribuídos entre os projetos — cobrindo unicidade, integridade referencial, nulidade e regras de negócio.

---

## 💼 Sobre

Profissional de tecnologia com 22 anos de trajetória, especializado em Analytics Engineering com foco em dados públicos (GovTech). Ao longo da carreira, atuei com SQL, modelagem de dados, entendimento de regras de negócio e suporte técnico a times de desenvolvimento — competências que sustentam diretamente minha atuação em projetos analíticos.

Concluí a **Pós-Graduação em Engenharia de Dados** (Data Science Academy / Facint, 2025) e a **Formação em Engenharia de Analytics da Indicium.ai**, incluindo projeto prático com dbt Cloud + Databricks. Atualmente, aguardo o **Desafio Final da Certificação Analytics Engineer by Indicium**.

Concentro meus esforços em projetos de dados públicos: pipelines configuráveis, modelos analíticos e métricas como *licitado x contratado* e *execução orçamentária*, sempre com foco em qualidade, governança e clareza técnica.

**Competências centrais:**
- **Modelagem dimensional** (Star Schema, SCD Tipo 2/3)
- **Transformações SQL** e dbt (tests, docs, macros, lineage)
- **Pipelines ELT** modernos e configuráveis
- **Data Quality** e governança
- **Pipelines analíticos para governo e finanças**

**Stack principal:** SQL · dbt · PostgreSQL · BigQuery · Airbyte · Python · Docker

---

## 🚀 Projetos

### 📊 Analytics Engineering

#### 1. Data Warehouse com Modelagem Dimensional

**Implementação completa de Data Warehouse local com modelagem Star Schema**

**Stack:** PostgreSQL · SQL · Docker · Ubuntu

**Técnicas:**
- ⭐ Modelagem dimensional (Star Schema)
- 🔄 SCD Tipo 2 e Tipo 3
- ⚙️ Procedures e Functions SQL
- 🔍 Views e Views Materializadas
- 📊 Queries analíticas avançadas (Window Functions, CTEs, RFM)

📁 **Documentação:** [Data-Warehouse/README.md](https://github.com/jeysel/Analytics-Engineer/blob/main/Data-Warehouse/README.md)

---

#### 2. Pipeline ELT Moderno: Weather Analytics

**Pipeline Analytics end-to-end com stack moderna cloud**

**Stack:** Open-Meteo → PostgreSQL → Airbyte → BigQuery → dbt → Evidence.dev

**Arquitetura:** API → Ingestão → DW → Transformações → Dashboard

**Destaques:**
- Modelos dbt em 3 camadas (staging → intermediate → marts)
- Macros reutilizáveis (WMO codes, Beaufort scale, testes de data quality)
- Dashboard publicado com Evidence.dev

📁 **Documentação:** [Weather-Analytics/README.md](https://github.com/jeysel/Analytics-Engineer/blob/main/Weather-Analytics/README.md)
🌐 **Dashboard:** https://jeysel.github.io/Analytics-Engineer/

---

### 🏛️ Dados Públicos (GovTech)

#### 3. Compras Públicas — Pipeline de Dados

**Status:** 🟡 *Em desenvolvimento*

Pipeline completo para ingestão, padronização e análise de compras públicas (SC + Betha).
Foco em **licitado x contratado**, competitividade e comportamento dos órgãos.

📁 **Projeto:** [compras-publicas/README.md](https://github.com/jeysel/Analytics-Engineer/blob/main/compras-publicas/README.md)

---

## 🎓 Formação e Projetos de Curso

Concluí a **Formação em Engenharia de Analytics da Indicium.ai**, com trilha completa em fundamentos, SQL, modelagem analítica, dbt, storytelling, data design e dashboards.

### Projeto Prático — dbt Cloud + Databricks (Indicium.ai)

Projeto completo aplicando boas práticas de modelagem, versionamento e transformação de dados em arquitetura Lakehouse.

🔗 **Repositório:** https://github.com/jeysel/banvic-dbt

**Aplicado no projeto:**
- Organização de camadas dbt (staging → intermediate → marts)
- Modelagem incremental em ambiente Lakehouse
- Testes e documentação nativos do dbt Cloud
- Integração dbt Cloud → Databricks SQL Warehouse
- Transformações orientadas ao negócio

---

### 🏆 Desafio Final — Certificação Analytics Engineer (Indicium.ai)

📌 **Status:** Aguardando escopo do desafio

Etapa prática que avalia habilidades reais de Analytics Engineering em projeto completo. Caso aprovado:
- Certificação oficial **Analytics Engineer by Indicium**
- Inclusão no **pool de talentos da Indicium** com acesso a oportunidades exclusivas

**Competências avaliadas:** pipelines ELT · modelagem dimensional · dbt avançado (tests, docs, macros, exposures) · governança · entrega orientada a valor

📁 **Repositório:** *(será adicionado ao iniciar o projeto)*

---

## 🗺️ Roadmap — Próximos Projetos

| Projeto | Descrição | Previsão |
|---|---|---|
| 💰 Orçamento Público | PPA, LDO, LOA — SICONFI + SC. Foco em dotação inicial x atualizada x executada | Q2 2026 |
| 📈 API Financeira | Indicadores financeiros, fundos e títulos públicos — BCB, CVM, Tesouro | Q2 2026 |

---

## 📚 Estrutura do Repositório

```
Analytics-Engineer/
│
├── compras-publicas/
│   ├── data/
│   ├── docs/
│   ├── src/
│   └── tests/
│
├── Data-Warehouse/
│   ├── Documentacao/
│   ├── Scripts-SQL/
│   │   ├── Modelo-Fisico.sql
│   │   ├── Carga-Dados.sql
│   │   ├── Procedures.sql
│   │   ├── Functions.sql
│   │   ├── Views.sql
│   │   └── Queries-Analise.sql
│   └── README.md
│
├── Weather-Analytics/
│   ├── airbyte/
│   ├── dbt/
│   │   ├── macros/
│   │   │   ├── weather_utils.sql
│   │   │   └── test_accepted_range.sql
│   │   └── models/
│   │       ├── staging/
│   │       ├── intermediate/
│   │       └── marts/
│   ├── evidence/
│   ├── postgresql/
│   └── docker/
│
└── README.md
```

---

## 💼 Skills

### Analytics Engineering
- SQL avançado (Window Functions, CTEs, otimização, RFM)
- Modelagem dimensional (Star, Snowflake, SCD 1/2/3)
- dbt (tests, docs, macros, lineage)
- Data Quality e governança
- Data Marts e DW

### Infraestrutura & Ingestão
- PostgreSQL · BigQuery · Airbyte
- Docker · Git
- AWS (S3, Glue, Athena) · GCP (BigQuery)

---

## 🎯 Foco Atual

**Analytics Engineering + Dados Públicos (GovTech)**

- Pipelines analíticos para governo
- Ingestão configurável (múltiplas fontes)
- Modelagem de compras e orçamento público
- Métricas: licitado x contratado, execução orçamentária
- Data Quality e documentação técnica

---

## 📫 Contato

📧 [jeysel@gmail.com](mailto:jeysel@gmail.com)
💼 https://www.linkedin.com/in/jeyselpachecobastos/
🐙 https://github.com/jeysel
📍 Santa Catarina, Brasil