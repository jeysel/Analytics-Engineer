{{
  config(
    materialized = 'table',
    schema       = 'gold',
    file_format  = 'delta'
  )
}}

/*
  Dimensão de fundos de investimento.
  Inclui apenas fundos em funcionamento normal com histórico de cotas.
  Chave surrogate gerada por dbt_utils.
*/

with fundos as (
    select * from {{ ref('int_fundos__ativos') }}
),

final as (
    select
        {{ dbt_utils.generate_surrogate_key(['cnpj_fundo']) }}  as sk_fundo,

        -- Identificação
        cnpj_fundo,
        nome_fundo,

        -- Classificação regulatória
        tipo_fundo,
        classe,
        coalesce(fundo_cotas_flag, 'N')                         as fundo_cotas,
        coalesce(fundo_exclusivo_flag, 'N')                     as fundo_exclusivo,
        coalesce(tributacao_longo_prazo_flag, 'N')              as tributacao_longo_prazo,

        -- Gestão
        gestor,
        cnpj_gestor,
        administrador,
        cnpj_administrador,

        -- Datas de ciclo de vida
        dt_constituicao,
        dt_inicio_atividade,
        round(idade_fundo_anos, 1)                              as idade_fundo_anos,

        -- Métricas de cobertura de dados
        primeira_cota,
        ultima_cota,
        qtd_dias_com_cota,
        round(pl_maximo_historico, 2)                           as pl_maximo_historico,

        -- Flags de elegibilidade para análises
        tem_historico_12m,
        tem_historico_36m,
        pl_acima_minimo

    from fundos
)

select * from final
