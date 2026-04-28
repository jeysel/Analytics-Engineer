"""
DAG: dag_informe_diario_cvm
Frequência: mensal (dia 1 às 08:00)
Responsabilidade:
  1. Baixar o informe diário do mês anterior da CVM (ZIP → CSV)
  2. Fazer upload do CSV para o DBFS do Databricks
  3. Iniciar o cluster Databricks (aguarda ficar RUNNING)
  4. Executar dbt build (staging + intermediate + marts)
  5. Executar dbt test

Fonte: https://dados.cvm.gov.br/dados/FI/DOC/INF_DIARIO/DADOS/inf_diario_fi_YYYYMM.zip
Destino: dbfs:/bronze/fundos/informe_diario/inf_diario_fi_YYYYMM.csv
"""

import base64
import os
import time
import zipfile
import logging
from datetime import datetime, timedelta

import requests
from airflow import DAG
from airflow.operators.bash import BashOperator
from airflow.operators.python import PythonOperator

log = logging.getLogger(__name__)

LOCAL_ZIP_PATH    = "/tmp/informe_diario.zip"
LOCAL_CSV_PATH    = "/tmp/informe_diario.csv"
DBFS_PREFIX       = "dbfs:/bronze/fundos/informe_diario"
CHUNK_SIZE        = 1024 * 1024  # 1 MB
CLUSTER_TIMEOUT_S = 600          # 10 minutos


# ─── helpers ────────────────────────────────────────────────────────────────

def _dbfs_headers() -> dict:
    return {"Authorization": f"Bearer {os.environ['DATABRICKS_TOKEN']}"}


def _dbfs_base_url() -> str:
    host = os.environ["DATABRICKS_HOST"].rstrip("/")
    return f"https://{host}/api/2.0/dbfs"


def _clusters_base_url() -> str:
    host = os.environ["DATABRICKS_HOST"].rstrip("/")
    return f"https://{host}/api/2.0/clusters"


def _mes_anterior(data_execucao: datetime) -> str:
    """Retorna YYYYMM do mês anterior à data de execução."""
    primeiro_dia = data_execucao.replace(day=1)
    mes_ant = primeiro_dia - timedelta(days=1)
    return mes_ant.strftime("%Y%m")


# ─── callback de falha ───────────────────────────────────────────────────────

def _notificar_falha(context: dict) -> None:
    """
    Chamado automaticamente pelo Airflow quando qualquer task do DAG falha.
    Registra o erro com contexto suficiente para diagnóstico.

    Para adicionar alertas externos (Slack, e-mail, PagerDuty), estenda aqui:
        from airflow.providers.slack.hooks.slack_webhook import SlackWebhookHook
        SlackWebhookHook(http_conn_id='slack_default').send(text=mensagem)
    """
    dag_id         = context["dag"].dag_id
    task_id        = context["task_instance"].task_id
    execution_date = context["execution_date"]
    log_url        = context["task_instance"].log_url
    exception      = context.get("exception")

    log.error(
        "FALHA | dag: %s | task: %s | execução: %s | logs: %s | erro: %s",
        dag_id, task_id, execution_date, log_url, exception,
    )


# ─── tasks ──────────────────────────────────────────────────────────────────

def download_informe(**context) -> None:
    """Baixa o arquivo ZIP do informe diário do mês anterior e extrai o CSV."""
    mes_ref = _mes_anterior(context["data_interval_start"])
    url = (
        "https://dados.cvm.gov.br/dados/FI/DOC/INF_DIARIO/DADOS/"
        f"inf_diario_fi_{mes_ref}.zip"
    )
    log.info("Baixando informe %s: %s", mes_ref, url)

    response = requests.get(url, timeout=300)
    response.raise_for_status()

    with open(LOCAL_ZIP_PATH, "wb") as f:
        f.write(response.content)

    with zipfile.ZipFile(LOCAL_ZIP_PATH, "r") as z:
        nome_csv = z.namelist()[0]
        z.extract(nome_csv, "/tmp/")
        os.rename(f"/tmp/{nome_csv}", LOCAL_CSV_PATH)

    tamanho_mb = os.path.getsize(LOCAL_CSV_PATH) / (1024 * 1024)
    log.info("Informe %s extraído: %.2f MB → %s", mes_ref, tamanho_mb, LOCAL_CSV_PATH)

    context["task_instance"].xcom_push(key="mes_ref", value=mes_ref)


def upload_informe_to_dbfs(**context) -> None:
    """Envia o CSV do informe para o DBFS, particionado por mês."""
    mes_ref   = context["task_instance"].xcom_pull(key="mes_ref", task_ids="download_informe")
    dbfs_path = f"{DBFS_PREFIX}/inf_diario_fi_{mes_ref}.csv"

    base_url = _dbfs_base_url()
    headers  = _dbfs_headers()

    resp = requests.post(
        f"{base_url}/create",
        headers=headers,
        json={"path": dbfs_path, "overwrite": True},
        timeout=30,
    )
    resp.raise_for_status()
    handle = resp.json()["handle"]

    bytes_enviados = 0
    with open(LOCAL_CSV_PATH, "rb") as f:
        while True:
            chunk = f.read(CHUNK_SIZE)
            if not chunk:
                break
            requests.post(
                f"{base_url}/add-block",
                headers=headers,
                json={"handle": handle, "data": base64.b64encode(chunk).decode()},
                timeout=60,
            ).raise_for_status()
            bytes_enviados += len(chunk)

    requests.post(
        f"{base_url}/close",
        headers=headers,
        json={"handle": handle},
        timeout=30,
    ).raise_for_status()

    log.info("Upload concluído: %.2f MB → %s", bytes_enviados / (1024 * 1024), dbfs_path)


def start_databricks_cluster(**context) -> None:
    """Garante que o cluster Databricks está RUNNING antes de rodar o dbt."""
    cluster_id = os.environ["DATABRICKS_CLUSTER_ID"]
    base_url   = _clusters_base_url()
    headers    = _dbfs_headers()

    def get_state() -> str:
        r = requests.get(
            f"{base_url}/get",
            headers=headers,
            params={"cluster_id": cluster_id},
            timeout=30,
        )
        r.raise_for_status()
        return r.json()["state"]

    estado = get_state()
    log.info("Estado atual do cluster: %s", estado)

    if estado == "RUNNING":
        log.info("Cluster já está RUNNING.")
        return

    if estado == "TERMINATED":
        log.info("Iniciando cluster...")
        requests.post(
            f"{base_url}/start",
            headers=headers,
            json={"cluster_id": cluster_id},
            timeout=30,
        ).raise_for_status()

    # Aguarda até RUNNING (max CLUSTER_TIMEOUT_S segundos)
    inicio = time.time()
    while time.time() - inicio < CLUSTER_TIMEOUT_S:
        time.sleep(15)
        estado = get_state()
        log.info("Aguardando cluster... estado: %s (%.0fs)", estado, time.time() - inicio)
        if estado == "RUNNING":
            log.info("Cluster RUNNING após %.0fs.", time.time() - inicio)
            return
        if estado in ("ERROR", "UNKNOWN"):
            raise RuntimeError(f"Cluster entrou em estado inesperado: {estado}")

    raise TimeoutError(f"Cluster não ficou RUNNING em {CLUSTER_TIMEOUT_S}s.")


# ─── DAG ────────────────────────────────────────────────────────────────────

default_args = {
    "owner": "analytics",
    "retries": 2,
    "retry_delay": timedelta(minutes=15),
    "on_failure_callback": _notificar_falha,
}

with DAG(
    dag_id="dag_informe_diario_cvm",
    default_args=default_args,
    description="Ingestão mensal: informe diário CVM → DBFS → dbt build + test",
    schedule="0 8 1 * *",
    start_date=datetime(2026, 1, 1),
    catchup=False,
    tags=["cvm", "bronze", "informe", "dbt", "fundos"],
) as dag:

    task_download = PythonOperator(
        task_id="download_informe",
        python_callable=download_informe,
    )

    task_upload = PythonOperator(
        task_id="upload_dbfs_bronze",
        python_callable=upload_informe_to_dbfs,
    )

    task_start_cluster = PythonOperator(
        task_id="start_databricks_cluster",
        python_callable=start_databricks_cluster,
    )

    task_dbt_build = BashOperator(
        task_id="dbt_build",
        bash_command="cd /opt/dbt && dbt build --target prod --profiles-dir .",
        env={
            "DATABRICKS_HOST":      "{{ var.value.get('DATABRICKS_HOST', '') or env_var('DATABRICKS_HOST') }}",
            "DATABRICKS_TOKEN":     "{{ var.value.get('DATABRICKS_TOKEN', '') or env_var('DATABRICKS_TOKEN') }}",
            "DATABRICKS_HTTP_PATH": "{{ var.value.get('DATABRICKS_HTTP_PATH', '') or env_var('DATABRICKS_HTTP_PATH') }}",
        },
    )

    task_dbt_test = BashOperator(
        task_id="dbt_test",
        bash_command="cd /opt/dbt && dbt test --target prod --profiles-dir .",
    )

    task_download >> task_upload >> task_start_cluster >> task_dbt_build >> task_dbt_test
