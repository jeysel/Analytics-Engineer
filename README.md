# 🎯 Analytics Engineering Portfolio

![dbt](https://img.shields.io/badge/dbt-FF694B?logo=dbt&logoColor=white)
![BigQuery](https://img.shields.io/badge/BigQuery-4285F4?logo=googlecloud&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![Airbyte](https://img.shields.io/badge/Airbyte-615EFF?logo=airbyte&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![Databricks](https://img.shields.io/badge/Databricks-FF3621?logo=databricks&logoColor=white)
![Last Updated](https://img.shields.io/badge/Atualizado-Abril%202026-brightgreen)


**Portfólio profissional com projetos práticos de Analytics Engineering e Dados Públicos (GovTech).**

💡 SQL é a linguagem central deste portfólio — modelos dbt estão em /dbt/models e queries analíticas em Scripts-SQL/.

🧪 Data Quality
Este portfólio contém 49 testes automatizados, cobrindo:

unicidade

integridade referencial

nulidade

ranges

freshness

regras de negócio

💼 Sobre
Analytics Engineer com base sólida em desenvolvimento de software, modelagem de dados e integrações complexas, hoje focado em Engenharia de Analytics.

Minha proposta de valor: Dados com Visão de Produto.
Unindo anos de experiência em modelagem de dados transacionais e descoberta de requisitos, realizo um discovery de dados muito mais assertivo. Não apenas construo o pipeline, mas garanto que a arquitetura atenda às necessidades reais de negócio, com governança, documentação clara e foco em usabilidade.

Stack e Expertise Técnica:
• Transformação & Modelagem: dbt (Cloud/Core), Databricks, BigQuery, SQL Avançado. Tradução de modelos relacionais complexos para arquiteturas dimensionais (Star Schema/Kimball).
• Pipelines & Arquitetura: ELT modernos (Airbyte), Data Quality automatizado, Lakehouse.
• Integrações: APIs (OAuth, webhooks, PIX), fluxos sistêmicos.

Formação
🎓 Pós-graduado em Engenharia de Dados (DSA) e Formação em Analytics Engineering (Indicium).
🚀 Desenvolvo projetos práticos end-to-end (Ingestão -> Warehouse -> Modelagem dbt -> BI) aplicando as melhores práticas de engenharia de software ao mundo dos dados.


🚀 Projetos
🏛️ 1. Compras Públicas — Pipeline de Dados (GovTech)

Pipeline completo para ingestão, padronização e análise de compras públicas (SC + Betha).
Foco em licitado x contratado, competitividade e comportamento dos órgãos.

📁 Projeto: compras-publicas/README.md  
🌐 Dashboard: https://jeysel.github.io/Analytics-Engineer/compras-publicas/

📊 2. Pipeline ELT Moderno — Weather Analytics
Pipeline end‑to‑end com stack moderna cloud.

Stack: Open-Meteo → PostgreSQL → Airbyte → BigQuery → dbt → Evidence.dev

Destaques:

Modelos dbt em 3 camadas

Macros reutilizáveis

49 testes automatizados

Dashboard ao vivo com Evidence.dev

📁 Documentação: Weather-Analytics/README.md  
🌐 Dashboard: https://jeysel.github.io/Analytics-Engineer/

🧱 3. Data Warehouse Dimensional — Star Schema + SCD
Implementação completa de Data Warehouse local com modelagem Kimball.

Stack: PostgreSQL · SQL · Docker · Ubuntu

Técnicas:

Star Schema

SCD Tipo 2 e 3

Procedures e Functions

Views materializadas

Queries analíticas avançadas

📁 Documentação: Data-Warehouse/README.md

🎓 Formação e Projetos de Curso
Projeto Prático — dbt Cloud + Databricks (Indicium.ai)
Projeto completo aplicando boas práticas de modelagem e transformação em arquitetura Lakehouse.

🔗 Repositório: https://github.com/jeysel/banvic-dbt

🏆 Desafio Final — Certificação Analytics Engineer (Indicium.ai)
📌 Status: Enviado/Aguardando avaliação
Competências avaliadas: pipelines ELT · modelagem dimensional · dbt avançado · governança · entrega orientada a valor.

🗺️ Roadmap — Próximos Projetos
Projeto	Descrição	Previsão
💰 CVM - Fundos de Investimento	Q2 2026 - Airflow | DBT | Databricks | Looker Studio



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