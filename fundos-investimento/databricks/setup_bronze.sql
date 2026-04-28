-- =============================================================================
-- setup_bronze.sql
-- Executar UMA VEZ como notebook no Databricks Community Edition.
-- Cria os schemas (bronze, silver, gold) e registra as tabelas externas
-- que apontam para os arquivos CSV enviados pelo Airflow via DBFS.
-- =============================================================================


-- ─── 1. Schemas ──────────────────────────────────────────────────────────────

CREATE DATABASE IF NOT EXISTS bronze COMMENT 'Dados brutos ingeridos pelo Airflow (CVM)';
CREATE DATABASE IF NOT EXISTS silver COMMENT 'Camada de padronização gerada pelo dbt';
CREATE DATABASE IF NOT EXISTS gold   COMMENT 'Camada analítica: dimensões, fato e marts (dbt)';


-- ─── 2. Tabela bronze: cadastro de fundos ────────────────────────────────────
-- O Airflow faz upload diário de /bronze/fundos/cadastro/cad_fi.csv

DROP TABLE IF EXISTS bronze.cad_fi;

CREATE TABLE bronze.cad_fi
USING csv
OPTIONS (
  path        'dbfs:/bronze/fundos/cadastro/cad_fi.csv',
  header      'true',
  delimiter   ';',
  inferSchema 'true',
  encoding    'ISO-8859-1'
);

-- Verificação
SELECT COUNT(*) AS total_fundos FROM bronze.cad_fi;


-- ─── 3. Tabela bronze: informe diário (histórico completo) ───────────────────
-- O Airflow faz upload mensal de arquivos inf_diario_fi_YYYYMM.csv
-- A wildcard *.csv faz o Spark ler todos os meses de uma vez.

DROP TABLE IF EXISTS bronze.inf_diario;

CREATE TABLE bronze.inf_diario
USING csv
OPTIONS (
  path        'dbfs:/bronze/fundos/informe_diario/*.csv',
  header      'true',
  delimiter   ';',
  inferSchema 'true',
  encoding    'ISO-8859-1'
);

-- Verificação
SELECT
  MIN(DT_COMPTC) AS data_mais_antiga,
  MAX(DT_COMPTC) AS data_mais_recente,
  COUNT(*)        AS total_registros
FROM bronze.inf_diario;


-- ─── 4. Diretórios DBFS (criar manualmente se não existirem) ─────────────────
-- Execute estas células em Python no mesmo notebook:

-- %python
-- dbutils.fs.mkdirs("dbfs:/bronze/fundos/cadastro")
-- dbutils.fs.mkdirs("dbfs:/bronze/fundos/informe_diario")
-- print("Diretórios criados com sucesso.")


-- =============================================================================
-- Após executar este script:
--   1. Suba o Airflow: cd airflow && docker compose up -d
--   2. Copie .env.example para .env e preencha suas credenciais
--   3. Trigger manual das DAGs no UI: http://localhost:8080
--   4. Execute dbt debug para verificar a conexão: cd dbt && dbt debug
-- =============================================================================
