/*
  Teste singular: volume mínimo do mart_rentabilidade_mensal.

  O mart mensal deve ter pelo menos 10.000 linhas após a carga inicial.
  Com ~5.000 fundos e meses desde 2020, o volume esperado é de centenas
  de milhares de linhas. Um resultado abaixo de 10k indica falha no
  processamento das window functions ou filtros muito restritivos.

  Convenção dbt: o teste falha se esta query retornar QUALQUER linha.
*/
select
    count(*) as total_registros
from {{ ref('mart_rentabilidade_mensal') }}
having count(*) < 10000
