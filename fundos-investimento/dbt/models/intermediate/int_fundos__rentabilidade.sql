{{
  config(materialized = 'ephemeral')
}}

/*
  Calcula métricas de rentabilidade diária e acumulada por fundo.
  Utiliza window functions para calcular retornos dia, YTD e comparações
  com períodos anteriores sem necessidade de self-joins.
*/

with cotas as (
    select * from {{ ref('stg_fundos__cotas_diarias') }}
),

com_referencias as (
    select
        cnpj_fundo,
        dt_competencia,
        vl_cota,
        vl_pl,
        vl_captacao,
        vl_resgate,
        nr_cotistas,

        -- Cota do dia anterior (para retorno diário)
        lag(vl_cota, 1) over (
            partition by cnpj_fundo
            order by dt_competencia
        )                                                       as vl_cota_dia_anterior,

        -- Primeira cota do ano corrente (para retorno YTD)
        first_value(vl_cota) over (
            partition by cnpj_fundo, year(dt_competencia)
            order by dt_competencia
            rows between unbounded preceding and current row
        )                                                       as vl_cota_inicio_ano,

        -- Fluxo líquido do dia
        coalesce(vl_captacao, 0) - coalesce(vl_resgate, 0)     as fluxo_liquido

    from cotas
),

com_retornos as (
    select
        cnpj_fundo,
        dt_competencia,
        vl_cota,
        vl_pl,
        vl_captacao,
        vl_resgate,
        nr_cotistas,
        fluxo_liquido,

        -- Retorno diário
        case
            when vl_cota_dia_anterior > 0
            then round((vl_cota / vl_cota_dia_anterior) - 1, 8)
            else null
        end                                                     as retorno_dia,

        -- Retorno YTD (acumulado no ano)
        case
            when vl_cota_inicio_ano > 0
            then round((vl_cota / vl_cota_inicio_ano) - 1, 6)
            else null
        end                                                     as retorno_ytd

    from com_referencias
)

select * from com_retornos
