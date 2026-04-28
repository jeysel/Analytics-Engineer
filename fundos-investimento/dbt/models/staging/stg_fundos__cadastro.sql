{{
  config(
    materialized = 'view',
    schema       = 'silver'
  )
}}

with source as (
    select * from {{ source('bronze', 'cad_fi') }}
),

renamed as (
    select
        -- Identificadores
        CNPJ_FUNDO                              as cnpj_fundo,
        DENOM_SOCIAL                            as nome_fundo,

        -- Classificação
        SIT                                     as situacao,
        TP_FUNDO                                as tipo_fundo,
        CLASSE                                  as classe,
        FUNDO_COTAS                             as fundo_cotas_flag,
        FUNDO_EXCLUSIVO                         as fundo_exclusivo_flag,
        TRIB_LPRAZO                             as tributacao_longo_prazo_flag,

        -- Gestor
        trim(GESTOR)                            as gestor,
        CPF_CNPJ_GESTOR                         as cnpj_gestor,
        PF_PJ_GESTOR                            as tipo_pessoa_gestor,

        -- Administrador
        trim(ADMIN)                             as administrador,
        CNPJ_ADMIN                              as cnpj_administrador,

        -- Datas (CVM entrega como string YYYY-MM-DD)
        cast(DT_CONST    as date)               as dt_constituicao,
        cast(DT_INI_ATIV as date)               as dt_inicio_atividade,
        cast(DT_INI_SIT  as date)               as dt_inicio_situacao,
        cast(DT_CANCEL   as date)               as dt_cancelamento

    from source
    where CNPJ_FUNDO is not null
)

select * from renamed
