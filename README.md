# 🎯 Analytics Engineering & Data Engineering Portfolio

**Portfólio profissional com projetos práticos de Analytics Engineering, Engenharia de Dados e Dados Públicos.**

Foco em transformação de dados, modelagem dimensional, pipelines ELT modernos, ingestão configurável e SQL avançado.

---

# 💼 Sobre

Sou um profissional de tecnologia com trajetória sólida em engenharia de requisitos, modelagem de dados, integrações e análise técnica, atualmente em transição avançada para Analytics Engineering. Ao longo da carreira, atuei profundamente com SQL, modelagem de dados, entendimento de regras de negócio e suporte técnico a times de desenvolvimento — competências que hoje sustentam minha atuação em projetos analíticos.
Aprofundei minha formação com a Pós-Graduação em Engenharia de Dados pela Data Science Academy (em parceria com a Faculdade Facint), concluída em 2025, onde desenvolvi bases teóricas e práticas em arquitetura de dados, pipelines, modelagem e processamento distribuído. Complementando essa formação, concluí também a Formação em Engenharia de Analytics da Indicium.ai, incluindo projeto prático com dbt Cloud + Databricks, e estou participando do processo para a Certificação Analytics Engineer.
Essa combinação de experiência prévia + formação técnica me permite construir pipelines modernos, modelos analíticos confiáveis e documentação clara e orientada ao negócio. Atualmente, concentro meus esforços em projetos envolvendo dados públicos (GovTech), criando pipelines configuráveis, modelos analíticos e métricas como licitado x contratado e execução orçamentária, sempre com foco em qualidade, governança e clareza técnica.

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
🌐 **Dashboard:** https://jeysel.github.io/Analytics-Engineer/
 
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
📁 **Documentação:** [search-ssp-sc/README.md](search-ssp-sc/README.md)

---

# 🏛️ Dados Públicos (GovTech) — *Novos Projetos*

## 🛒 5. Compras Públicas — Pipeline de Dados  
**Status:** 🟡 *Em desenvolvimento*  
Pipeline completo para ingestão, padronização e análise de compras públicas (SC + Betha).  
Foco em **licitado x contratado**, competitividade e comportamento dos órgãos.

📁 **Projeto:** [compras-publicas/](compras-publicas/)  
📄 **README:** [compras-publicas/README.md](compras-publicas/README.md)

---

## 💰 6. Orçamento Público — PPA, LDO, LOA  
**Status:** ⚪ *Backlog*  
Pipeline para análise de planejamento e execução orçamentária (SICONFI + SC).  
Foco em **dotação inicial x atualizada x executada**.

📁 **Projeto:** [orcamento-publico/](orcamento-publico/)
📄 **README:** [orcamento-publico/README.md](orcamento-publico/README.md)

---

## 📈 7. API Financeira — BCB, CVM, Tesouro  
**Status:** ⚪ *Backlog*  
Pipeline para ingestão e análise de indicadores financeiros, fundos e títulos públicos.

📁 **Projeto:** [api-financeira/](api-financeira/)
📄 **README:** [api-financeira/README.md](api-financeira/README.md)

---

---

# 📚 Formação e Projetos de Curso

Concluí a **Formação em Engenharia de Analytics da Indicium.ai**, composta por trilha completa em fundamentos, SQL, modelagem analítica, dbt, storytelling, data design e dashboards.  
Essa formação estruturada reforça minha base teórica e prática em **Analytics Engineering**.

---

## 🎓 Projeto Prático — Engenharia de Analytics com dbt (Indicium.ai)

Durante o módulo de Engenharia de Analytics, desenvolvi um projeto completo utilizando **dbt Cloud** e **Databricks**, aplicando boas práticas de modelagem, versionamento e transformação de dados em arquitetura Lakehouse.

🔗 **Repositório do projeto (fork):**  
https://github.com/jeysel/banvic-dbt

**Principais aprendizados aplicados:**

- Organização de camadas dbt (staging → intermediate → marts)  
- Modelagem incremental em ambiente Lakehouse  
- Testes e documentação nativos do dbt Cloud  
- Integração dbt Cloud → Databricks SQL Warehouse  
- Transformações orientadas ao negócio  
- Estrutura de projeto profissional e versionamento  

Esse projeto complementa meus projetos autorais e reforça minha base prática em **dbt + Databricks**, stack amplamente utilizada no mercado.

---

## 🧪 Desafio Final — Certificação Analytics Engineer (Indicium.ai)

Após concluir toda a trilha, estou apto a participar do **Desafio Final da Indicium**, etapa prática que avalia habilidades reais de Analytics Engineering em um projeto completo.

📌 **Status:** Aguardando escopo do desafio  
📁 **Repositório:** *(será adicionado assim que o projeto iniciar)*

Caso aprovado:

- receberei a **certificação oficial de Analytics Engineer pela Indicium.ai**  
- serei incluído no **pool de talentos da Indicium**, com acesso a oportunidades exclusivas  

O desafio consolida competências como:

- pipelines ELT completos  
- modelagem dimensional aplicada  
- dbt Cloud avançado (tests, docs, macros, exposures)  
- boas práticas de engenharia e governança  
- entrega orientada a valor  

---

# 📚 Estrutura do Repositório

Analytics-Engineer/  
│  
├── compras-publicas/  
│   ├── data/  
│   ├── docs/  
│   ├── src/  
│   └── tests/  
│  
├── orcamento-publico/  
│   ├── data/  
│   ├── docs/  
│   ├── src/  
│   └── tests/  
│  
├── api-financeira/  
│   ├── data/  
│   ├── docs/  
│   ├── src/  
│   └── tests/  
│  
├── Data-Warehouse/  
│   ├── docs/  
│   ├── sql/  
│   └── docker/  
│  
├── Weather-Analytics/  
│   ├── airbyte/  
│   ├── dbt/  
│   ├── evidence/  
│   ├── postgresql/  
│   └── docker/  
│  
├── ETL-Real-Time/  
│   ├── airflow/  
│   ├── kafka/  
│   ├── spark/  
│   └── cassandra/  
│  
├── search-ssp-sc/  
│   ├── src/  
│   ├── docker/  
│   └── docs/  
│  
└── README.md  

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

**Última atualização:** 2026