{{
  config(
    materialized        = 'incremental',
    incremental_strategy= 'merge',
    unique_key          = 'sk_cota',
    schema              = 'gold',
    file_format         = 'delta',
    partition_by        = {'field': 'dt_competencia', 'data_type': 'date', 'granularity': 'month'}
  )
}}

/*
  Tabela fato: uma linha por fundo por dia.
  Granularidade: cnpj_fundo × dt_competencia.
  Particionada por mês para otimizar queries no Looker Studio.

  Inclui apenas fundos presentes na dim_fundo (em funcionamento com histórico).

  Estratégia incremental: merge por sk_cota.
  Em cada execução, processa apenas datas novas (> max existente na tabela).
*/

with rentabilidade as (
    select * from {{ ref('int_fundos__rentabilidade') }}
    {% if is_incremental() %}
    -- Processa apenas dias novos; usa > para reprocessar o último dia caso a carga seja parcial
    where dt_competencia > (select max(dt_competencia) from {{ this }})
    {% endif %}
),

final as (
    select
        {{ dbt_utils.generate_surrogate_key(['r.cnpj_fundo', 'r.dt_competencia']) }}    as sk_cota,

        -- Chaves estrangeiras
        f.sk_fundo,
        g.sk_gestor,

        -- Degenerada (evita join na análise diária)
        r.cnpj_fundo,
        r.dt_competencia,

        -- Métricas de cota
        r.vl_cota,
        r.vl_pl,

        -- Fluxo
        coalesce(r.vl_captacao, 0)                                                      as vl_captacao,
        coalesce(r.vl_resgate,  0)                                                      as vl_resgate,
        r.fluxo_liquido,

        -- Cotistas
        r.nr_cotistas,

        -- Rentabilidade
        r.retorno_dia,
        r.retorno_ytd

    from rentabilidade r
    inner join {{ ref('dim_fundo') }}  f on r.cnpj_fundo  = f.cnpj_fundo
    left  join {{ ref('dim_gestor') }} g on f.cnpj_gestor = g.cnpj_gestor
)

select * from final
