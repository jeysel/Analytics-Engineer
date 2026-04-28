/*
  Sobrescreve o comportamento padrão do dbt para geração de nomes de schema.

  Padrão dbt: <target_schema>_<custom_schema>  → ex: prod_gold
  Comportamento aqui: usa o custom_schema diretamente → ex: gold

  No Databricks Community Edition, os schemas mapeiam para databases do Hive Metastore.
  Queremos que staging → silver, marts → gold, sem prefixo do target.
*/

{% macro generate_schema_name(custom_schema_name, node) -%}
    {%- if custom_schema_name is none -%}
        {{ target.schema }}
    {%- else -%}
        {{ custom_schema_name | trim }}
    {%- endif -%}
{%- endmacro %}
