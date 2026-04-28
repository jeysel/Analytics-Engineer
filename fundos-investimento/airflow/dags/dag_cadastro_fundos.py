"""
DAG: dag_cadastro_fundos
Frequência: diária (07:00)
Responsabilidade: baixar o cadastro de fundos da CVM e fazer upload para o DBFS do Databricks.

Fonte: https://dados.cvm.gov.br/dados/FI/CAD/DADOS/cad_fi.csv
Destino: dbfs:/bronze/fundos/cadastro/cad_fi.csv
"""

import base64
import os
import logging
from datetime import datetime, timedelta

import requests
from airflow import DAG
from airflow.operators.python import PythonOperator

log = logging.getLogger(__name__)

CVM_CADASTRO_URL = "https://dados.cvm.gov.br/dados/FI/CAD/DADOS/cad_fi.csv"
DBFS_DESTINO     = "dbfs:/bronze/fundos/cadastro/cad_fi.csv"
LOCAL_PATH       = "/tmp/cad_fi.csv"
CHUNK_SIZE       = 1024 * 1024  # 1 MB


# ─── helpers ────────────────────────────────────────────────────────────────

def _dbfs_headers() -> dict:
    token = os.environ["DATABRICKS_TOKEN"]
    return {"Authorization": f"Bearer {token}"}


def _dbfs_base_url() -> str:
    host = os.environ["DATABRICKS_HOST"].rstrip("/")
    return f"https://{host}/api/2.0/dbfs"


# ─── callback de falha ───────────────────────────────────────────────────────

def _notificar_falha(context: dict) -> None:
    """
    Chamado automaticamente pelo Airflow quando qualquer task do DAG falha.
    Registra o erro com contexto suficiente para diagnóstico.

    Para adicionar alertas externos (Slack, e-mail, PagerDuty), estenda aqui:
        from airflow.providers.slack.hooks.slack_webhook import SlackWebhookHook
        SlackWebhookHook(http_conn_id='slack_default').send(text=mensagem)
    """
    dag_id        = context["dag"].dag_id
    task_id       = context["task_instance"].task_id
    execution_date = context["execution_date"]
    log_url       = context["task_instance"].log_url
    exception     = context.get("exception")

    log.error(
        "FALHA | dag: %s | task: %s | execução: %s | logs: %s | erro: %s",
        dag_id, task_id, execution_date, log_url, exception,
    )


# ─── tasks ──────────────────────────────────────────────────────────────────

def download_cadastro(**context) -> None:
    """Baixa o cad_fi.csv da CVM para /tmp."""
    log.info("Iniciando download: %s", CVM_CADASTRO_URL)
    response = requests.get(CVM_CADASTRO_URL, timeout=120)
    response.raise_for_status()

    with open(LOCAL_PATH, "wb") as f:
        f.write(response.content)

    tamanho_mb = len(response.content) / (1024 * 1024)
    log.info("Download concluído: %.2f MB → %s", tamanho_mb, LOCAL_PATH)


def upload_to_dbfs(**context) -> None:
    """Envia o cad_fi.csv para o DBFS do Databricks via REST API (chunks de 1 MB)."""
    base_url = _dbfs_base_url()
    headers  = _dbfs_headers()

    # 1. Abre handle de escrita
    resp = requests.post(
        f"{base_url}/create",
        headers=headers,
        json={"path": DBFS_DESTINO, "overwrite": True},
        timeout=30,
    )
    resp.raise_for_status()
    handle = resp.json()["handle"]
    log.info("Handle DBFS aberto: %s", handle)

    # 2. Envia em chunks
    bytes_enviados = 0
    with open(LOCAL_PATH, "rb") as f:
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

    # 3. Fecha handle
    requests.post(
        f"{base_url}/close",
        headers=headers,
        json={"handle": handle},
        timeout=30,
    ).raise_for_status()

    log.info("Upload concluído: %.2f MB → %s", bytes_enviados / (1024 * 1024), DBFS_DESTINO)


# ─── DAG ────────────────────────────────────────────────────────────────────

default_args = {
    "owner": "analytics",
    "retries": 2,
    "retry_delay": timedelta(minutes=10),
    "on_failure_callback": _notificar_falha,
}

with DAG(
    dag_id="dag_cadastro_fundos",
    default_args=default_args,
    description="Ingestão diária: cadastro de fundos CVM → DBFS Bronze",
    schedule="0 7 * * *",
    start_date=datetime(2026, 1, 1),
    catchup=False,
    tags=["cvm", "bronze", "cadastro", "fundos"],
) as dag:

    task_download = PythonOperator(
        task_id="download_cadastro_cvm",
        python_callable=download_cadastro,
    )

    task_upload = PythonOperator(
        task_id="upload_dbfs_bronze",
        python_callable=upload_to_dbfs,
    )

    task_download >> task_upload
