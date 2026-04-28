{{
  config(
    materialized = 'view',
    schema       = 'silver'
  )
}}

with source as (
    select * from {{ source('bronze', 'inf_diario') }}
),

renamed as (
    select
        -- Identificadores
        CNPJ_FUNDO                                  as cnpj_fundo,
        cast(DT_COMPTC      as date)                as dt_competencia,

        -- Métricas de cota e patrimônio
        cast(VL_QUOTA       as decimal(18, 8))      as vl_cota,
        cast(VL_PATRIM_LIQ  as decimal(18, 2))      as vl_pl,

        -- Fluxo de cotistas
        cast(CAPTC_DIA      as decimal(18, 2))      as vl_captacao,
        cast(RESG_DIA       as decimal(18, 2))      as vl_resgate,
        cast(NR_COTST       as int)                 as nr_cotistas

    from source
    where
        CNPJ_FUNDO  is not null
        and DT_COMPTC   is not null
        and VL_QUOTA    is not null
        and cast(VL_QUOTA as decimal(18, 8)) > 0
        -- Filtro de data configurável via variável dbt
        and cast(DT_COMPTC as date) >= '{{ var("data_inicio_analise") }}'
)

select * from renamed
