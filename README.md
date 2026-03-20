# 🎯 Analytics Engineering & Data Engineering Portfolio

**Portfólio profissional com projetos práticos de Analytics Engineering, Engenharia de Dados e Dados Públicos.**

Foco em transformação de dados, modelagem dimensional, pipelines ELT modernos, ingestão configurável e SQL avançado.

---

# 💼 Sobre

Engenheiro de Dados com background sólido em **Analytics Engineering**, atuando com:

- **Modelagem dimensional** (Star Schema, SCD Tipo 2/3)  
- **Transformações SQL** e dbt  
- **Pipelines ELT/ETL** modernos  
- **Data Quality**, governança e documentação  
- **Integrações e ingestão de dados públicos**  
- **Pipelines analíticos para governo e finanças**

**Stack principal:** SQL, dbt, PostgreSQL, BigQuery, Airbyte, Python, Docker

---

# 🚀 Projetos

## 📊 Analytics Engineering

### 1. Data Warehouse com Modelagem Dimensional  
**Implementação completa de Data Warehouse local com modelagem Star Schema**

**Stack:** PostgreSQL, SQL, Docker, Ubuntu  
**Técnicas:**  
- ⭐ Modelagem dimensional (Star Schema)  
- 🔄 SCD Tipo 2 e Tipo 3  
- ⚙️ Procedures e Functions SQL  
- 🔍 Views materializadas  
- 📊 Processo ETL completo  

📁 **Documentação:** [Data-Warehouse/README.md](Data-Warehouse/README.md)

---

### 2. Pipeline ELT Moderno: Weather Analytics  
**Pipeline Analytics end-to-end com stack moderna cloud**

**Stack:** Open-Meteo → PostgreSQL → Airbyte → BigQuery → dbt → Evidence.dev  
**Arquitetura:** API → Ingestão → DW → Transformações → Dashboard  

📁 **Documentação:** [Weather-Analytics/README.md](Weather-Analytics/README.md)  
🌐 **Dashboard:** https://jeysel.github.io/Engenharia-Dados/

---

## 🔧 Data Engineering

### 3. ETL Real-Time com Streaming  
**Pipeline ETL tempo real para dados governamentais**

**Stack:** Airflow, Kafka, Spark Streaming, Cassandra, Python  
📁 **Documentação:** [ETL-Real-Time/Guia-Execução.md](ETL-Real-Time/Guia-Execução.md)

---

### 4. Extração de Dados com OCR  
**Sistema automático de extração de dados estruturados de PDFs**

**Stack:** Python, OCR (Tesseract), PostgreSQL, Docker  
📁 **Documentação:** [search-ssp-sc/Como-Usar.md](search-ssp-sc/Como-Usar.md)

---

# 🏛️ Dados Públicos (GovTech) — *Novos Projetos*

## 🛒 5. Compras Públicas — Pipeline de Dados  
**Status:** 🟡 *Em desenvolvimento*  
Pipeline completo para ingestão, padronização e análise de compras públicas (SC + Betha).  
Foco em **licitado x contratado**, competitividade e comportamento dos órgãos.

📁 **Projeto:** `compras-publicas/`  
📄 **README:** compras-publicas/README.md

---

## 💰 6. Orçamento Público — PPA, LDO, LOA  
**Status:** ⚪ *Backlog*  
Pipeline para análise de planejamento e execução orçamentária (SICONFI + SC).  
Foco em **dotação inicial x atualizada x executada**.

📁 **Projeto:** `orcamento-publico/`

---

## 📈 7. API Financeira — BCB, CVM, Tesouro  
**Status:** ⚪ *Backlog*  
Pipeline para ingestão e análise de indicadores financeiros, fundos e títulos públicos.

📁 **Projeto:** `api-financeira/`

---

# 📚 Estrutura do Repositório

Analytics-Engineer/
│
├── compras-publicas/              # 🟡 Em desenvolvimento
│   ├── data/
│   ├── docs/
│   ├── src/
│   └── tests/
│
├── orcamento-publico/             # ⚪ Backlog
│   ├── data/
│   ├── docs/
│   ├── src/
│   └── tests/
│
├── api-financeira/                # ⚪ Backlog
│   ├── data/
│   ├── docs/
│   ├── src/
│   └── tests/
│
│
├── Data-Warehouse/                # Analytics Engineering: DW dimensional
│   ├── docs/
│   ├── sql/
│   └── docker/
│
├── Weather-Analytics/             # Pipeline ELT moderno end-to-end
│   ├── airbyte/
│   ├── dbt/
│   ├── evidence/
│   ├── postgresql/
│   └── docker/
│
├── ETL-Real-Time/                 # Data Engineering: Streaming
│   ├── airflow/
│   ├── kafka/
│   ├── spark/
│   └── cassandra/
│
├── search-ssp-sc/                 # Data Engineering: OCR extraction
│   ├── src/
│   ├── docker/
│   └── docs/
│
└── README.md                      # README principal do portfólio

---

# 💼 Skills

### Analytics Engineering
- SQL avançado (Window Functions, CTEs, otimização)  
- Modelagem dimensional (Star, Snowflake, SCD 1/2/3)  
- dbt (tests, docs, macros, lineage)  
- Data Quality e governança  
- Data Marts e DW  

### Data Engineering
- Python, SQL  
- Airflow, Kafka, Spark Streaming  
- PostgreSQL, Cassandra, BigQuery  
- Airbyte, Docker, Git, Terraform  
- AWS (S3, Glue, Athena), GCP (BigQuery)

---

# 🎯 Foco Atual

**Analytics Engineering + Dados Públicos**  
- Pipelines analíticos para governo  
- Ingestão configurável (múltiplas fontes)  
- Modelagem de compras e orçamento público  
- Métricas: licitado x contratado, execução orçamentária  
- Data Quality e documentação técnica  

---

# 📫 Contato

📧 jeysel@gmail.com  
💼 https://www.linkedin.com/in/jeyselpachecobastos/  
🐙 https://github.com/jeysel  
📍 Santa Catarina, Brasil

---

**Última atualização:** Março 2026