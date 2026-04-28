{{
  config(
    materialized        = 'incremental',
    incremental_strategy= 'merge',
    unique_key          = 'sk_rentabilidade_mensal',
    schema              = 'gold',
    file_format         = 'delta'
  )
}}

/*
  Mart analítico: rentabilidade mensal por fundo.
  Granularidade: sk_fundo × mes_ref (YYYY-MM-01).

  Métricas calculadas:
    - retorno_mes:   retorno no mês (último dia / primeiro dia do mês)
    - retorno_12m:   retorno acumulado dos últimos 12 meses (rolling)
    - retorno_36m:   retorno acumulado dos últimos 36 meses (rolling)
    - fluxo_liquido_mes: soma de captação − resgate no mês
    - pl_fim_mes:   PL no último dia útil do mês
    - cotistas_fim_mes: cotistas no último dia útil do mês

  Fonte principal para o Looker Studio (relatório de ranking e evolução).

  Estratégia incremental: merge por sk_rentabilidade_mensal.
  As window functions (lag 12m/36m) precisam do histórico completo da fct,
  portanto o filtro incremental é aplicado apenas no CTE final — os CTEs
  anteriores lêem toda a fct_cotas_diarias para garantir cálculos corretos.
*/

with fct as (
    select * from {{ ref('fct_cotas_diarias') }}
),

dim_fundo as (
    select * from {{ ref('dim_fundo') }}
),

-- Último e primeiro valor de cota por mês (sem filtro de granularidade de linha)
agregado_mensal as (
    select
        sk_fundo,
        date_trunc('month', dt_competencia)                             as mes_ref,

        -- Último dia do mês
        last_value(vl_cota)  over w_mes                                 as vl_cota_fim_mes,
        last_value(vl_pl)    over w_mes                                 as pl_fim_mes,
        last_value(nr_cotistas) over w_mes                              as cotistas_fim_mes,

        -- Primeiro dia do mês
        first_value(vl_cota) over w_mes                                 as vl_cota_inicio_mes,

        -- Cota de 12 meses atrás (para retorno rolling)
        lag(last_value(vl_cota) over w_mes, 12) over (
            partition by sk_fundo
            order by date_trunc('month', dt_competencia)
        )                                                               as vl_cota_12m_atras,

        -- Cota de 36 meses atrás
        lag(last_value(vl_cota) over w_mes, 36) over (
            partition by sk_fundo
            order by date_trunc('month', dt_competencia)
        )                                                               as vl_cota_36m_atras,

        -- Fluxo acumulado no mês
        sum(vl_captacao) over w_mes                                     as captacao_mes,
        sum(vl_resgate)  over w_mes                                     as resgate_mes,
        sum(fluxo_liquido) over w_mes                                   as fluxo_liquido_mes

    from fct

    window w_mes as (
        partition by sk_fundo, date_trunc('month', dt_competencia)
        order by dt_competencia
        rows between unbounded preceding and unbounded following
    )
),

-- Remove duplicatas (uma linha por fundo por mês)
dedup as (
    select distinct
        sk_fundo,
        mes_ref,
        vl_cota_fim_mes,
        vl_cota_inicio_mes,
        vl_cota_12m_atras,
        vl_cota_36m_atras,
        pl_fim_mes,
        cotistas_fim_mes,
        captacao_mes,
        resgate_mes,
        fluxo_liquido_mes
    from agregado_mensal
),

-- Calcula retornos com proteção contra divisão por zero
com_retornos as (
    select
        d.*,
        -- Retorno mensal
        case
            when d.vl_cota_inicio_mes > 0
            then round((d.vl_cota_fim_mes / d.vl_cota_inicio_mes) - 1, 6)
            else null
        end                                                             as retorno_mes,

        -- Retorno 12 meses (rolling)
        case
            when d.vl_cota_12m_atras > 0
            then round((d.vl_cota_fim_mes / d.vl_cota_12m_atras) - 1, 6)
            else null
        end                                                             as retorno_12m,

        -- Retorno 36 meses (rolling)
        case
            when d.vl_cota_36m_atras > 0
            then round((d.vl_cota_fim_mes / d.vl_cota_36m_atras) - 1, 6)
            else null
        end                                                             as retorno_36m

    from dedup d
),

-- Enriquece com atributos da dim_fundo para facilitar queries no Looker Studio
final as (
    select
        {{ dbt_utils.generate_surrogate_key(['r.sk_fundo', 'r.mes_ref']) }}     as sk_rentabilidade_mensal,
        r.sk_fundo,
        f.cnpj_fundo,
        f.nome_fundo,
        f.tipo_fundo,
        f.classe,
        f.gestor,
        f.cnpj_gestor,
        r.mes_ref,
        r.vl_cota_fim_mes,
        round(r.pl_fim_mes,          2)                                         as pl_fim_mes,
        r.cotistas_fim_mes,
        round(r.captacao_mes,        2)                                         as captacao_mes,
        round(r.resgate_mes,         2)                                         as resgate_mes,
        round(r.fluxo_liquido_mes,   2)                                         as fluxo_liquido_mes,
        r.retorno_mes,
        r.retorno_12m,
        r.retorno_36m,

        -- Percentuais formatados (úteis para exibição no Looker Studio)
        round(r.retorno_mes  * 100, 4)                                          as retorno_mes_pct,
        round(r.retorno_12m  * 100, 4)                                          as retorno_12m_pct,
        round(r.retorno_36m  * 100, 4)                                          as retorno_36m_pct

    from com_retornos r
    inner join dim_fundo f on r.sk_fundo = f.sk_fundo

    {% if is_incremental() %}
    -- Processa apenas meses novos; o histórico completo já está na tabela
    where r.mes_ref > (select max(mes_ref) from {{ this }})
    {% endif %}
)

select * from final
