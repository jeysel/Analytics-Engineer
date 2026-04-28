/*
  Teste singular: volume mínimo da fct_cotas_diarias.

  A tabela fato deve ter pelo menos 500.000 linhas após a carga inicial.
  Com ~5.000 fundos ativos e dados desde 2020, o volume esperado é de
  vários milhões de linhas. Um resultado abaixo de 500k indica falha
  na ingestão ou no processamento dbt.

  Convenção dbt: o teste falha se esta query retornar QUALQUER linha.
*/
select
    count(*) as total_registros
from {{ ref('fct_cotas_diarias') }}
having count(*) < 500000
