# 🎯 Analytics Engineering & Data Engineering Portfolio

**Projetos práticos de Analytics Engineering e Engenharia de Dados**

Foco em transformação de dados, modelagem dimensional, pipelines ELT modernos e SQL avançado.

---

## 💼 Sobre

Engenheiro de Dados com background Analytics Engineering, especializado em:
- **Modelagem dimensional** (Star Schema, SCD Tipo 2/3)
- **Transformações SQL** e dbt
- **Pipelines ELT/ETL** modernos
- **Data Quality** e governança

**Stack:** SQL, dbt, PostgreSQL, BigQuery, Airbyte, Python, Docker

---

## 🚀 Projetos

### 📊 Analytics Engineering

#### 1. Data Warehouse com Modelagem Dimensional
**Implementação completa de Data Warehouse local com modelagem Star Schema**

**Stack:** PostgreSQL, SQL, Docker, Ubuntu  
**Técnicas:**
- ⭐ Modelagem dimensional (Star Schema)
- 🔄 SCD Tipo 2 e Tipo 3 (Slowly Changing Dimensions)
- ⚙️ Procedures e Functions SQL
- 🔍 Views materializadas para analytics
- 📊 Processo ETL completo

**Highlights:**
- Tabelas fato e dimensão implementadas
- Histórico completo de mudanças (SCD2)
- Queries analytics otimizadas
- Ambiente reproduzível Docker

📁 **Documentação:** [Data-Warehouse/README.md](Data-Warehouse/README.md)

---

#### 2. Pipeline ELT Moderno: Weather Analytics
**Pipeline Analytics end-to-end com stack moderna cloud**

**Stack:** Open-Meteo → PostgreSQL → Airbyte → BigQuery → dbt → Evidence.dev → GitHub Pages
**Arquitetura:** API → Ingestão → Data Warehouse → Transformações → Dashboard ao vivo

**Highlights:**
- 🔄 Ingestão automática via Airbyte (PostgreSQL → BigQuery)
- ⚙️ Transformações dbt: staging → intermediate → marts
- 📊 Window functions, rolling averages 30d, detecção de anomalias
- ✅ 49 testes automatizados + freshness checks
- 🚀 CI/CD: GitHub Actions → GitHub Pages

**Técnicas dbt:**
- Camadas: staging → intermediate → marts
- Particionamento e clustering no BigQuery
- Testes: unique, not_null, accepted_values, dbt_utils ranges
- Schema.yml com documentação completa de colunas

🌐 **Dashboard ao vivo:** [jeysel.github.io/Engenharia-Dados](https://jeysel.github.io/Engenharia-Dados/)
📁 **Documentação:** [Weather-Analytics/README.md](Weather-Analytics/README.md)

---

### 🔧 Data Engineering

#### 3. ETL Real-Time com Streaming
**Pipeline ETL tempo real para dados governamentais**

**Stack:** Apache Airflow, Kafka, Spark Streaming, Cassandra, Python  
**Fonte:** dados.gov.br (SINESP - Segurança Pública)

**Highlights:**
- Pipeline streaming end-to-end
- Orquestração Airflow
- Processamento tempo real Spark
- Storage otimizado Cassandra

📁 **Documentação:** [ETL-Real-Time/Guia-Execução.md](ETL-Real-Time/Guia-Execução.md)  
🔗 **Fonte dados:** [dados.gov.br](https://dados.gov.br/)

---

#### 4. Extração de Dados com OCR
**Sistema automático de extração de dados estruturados de PDFs**

**Stack:** Python, OCR (Tesseract), PostgreSQL, Docker  
**Fonte:** SSP/SC - Relatórios de Segurança Pública

**Highlights:**
- OCR automático de PDFs
- Transformação texto → dados estruturados
- Storage PostgreSQL
- Pipeline completo extração → transformação → carga

📁 **Documentação:** [search-ssp-sc/Como-Usar.md](search-ssp-sc/Como-Usar.md)  
🔗 **Fonte dados:** [SSP/SC - Segurança em Números](https://ssp.sc.gov.br/segurancaemnumeros/)

---

## 💼 Skills

### Analytics Engineering
- **SQL:** Avançado (Window Functions, CTEs, Subqueries, Otimização)
- **Modelagem:** Star Schema, Snowflake Schema, SCD Tipo 1/2/3
- **dbt:** Transformações, Tests, Documentation, Macros, Lineage
- **Data Quality:** Testes, Validações, Governança
- **DW/BI:** PostgreSQL, BigQuery, Data Marts

### Data Engineering
- **Languages:** SQL, Python
- **Orchestration:** Apache Airflow
- **Streaming:** Kafka, Spark Streaming
- **Databases:** PostgreSQL, Cassandra, BigQuery
- **Tools:** Airbyte, Docker, Git, Terraform
- **Cloud:** AWS (S3, Glue, Athena), Google Cloud (BigQuery)

---

## 🛠️ Ambiente de Desenvolvimento

Todos os projetos incluem ambiente Docker completo para reprodução local.

**Requisitos:**
- Docker Desktop
- WSL2 (Windows) ou Linux/Mac
- Git

**Setup rápido:**
```bash
# Clone o repositório
git clone https://github.com/jeysel/Engenharia-Dados.git
cd Engenharia-Dados

# Cada projeto tem seu próprio docker-compose
cd [nome-projeto]
docker-compose up -d
```

📁 **Detalhes:** Cada projeto contém README específico com instruções completas

---

## 📚 Estrutura do Repositório
```
Engenharia-Dados/
├── Data-Warehouse/              # Analytics: DW dimensional local
├── Weather-Analytics/           # Analytics: Pipeline ELT moderno end-to-end
│   ├── dbt/                     #   Transformações (staging → intermediate → marts)
│   ├── airbyte/                 #   Configuração de ingestão
│   ├── postgresql/              #   Coleta de dados (Open-Meteo)
│   └── evidence/                #   Dashboard (Evidence.dev → GitHub Pages)
├── ETL-Real-Time/               # Data Eng: Streaming pipeline
├── search-ssp-sc/               # Data Eng: OCR extraction
└── README.md                    # Geral do repositório
```

---

## 🎯 Foco Atual

**Analytics Engineering:**
- Modelagem dimensional avançada
- Transformações dbt
- Data quality e governança
- SQL analytics otimizado

**Próximos projetos:**
- Incrementar pipeline dbt com Great Expectations
- Modelo incremental no dbt (unique_key + merge strategy)
- Implementação SCD Tipo 4 e Tipo 6

---

## 📫 Contato

📧 jeysel@gmail.com  
💼 [LinkedIn](https://www.linkedin.com/in/jeyselpachecobastos/)  
🐙 [GitHub](https://github.com/jeysel)  
📍 Santa Catarina, Brasil

---

**Última atualização:** Março 2026