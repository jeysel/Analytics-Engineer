{{
  config(
    materialized = 'table',
    schema       = 'gold',
    file_format  = 'delta'
  )
}}

/*
  Dimensão de gestores de fundos.
  Agrega informações dos fundos geridos: quantidade, AUM total e classes.
*/

with fundos as (
    select * from {{ ref('dim_fundo') }}
),

gestores as (
    select
        cnpj_gestor,
        gestor                                                              as nome_gestor,
        count(*)                                                            as qtd_fundos_geridos,
        sum(pl_maximo_historico)                                            as aum_total_maximo,
        count(case when tem_historico_12m then 1 end)                       as fundos_com_historico_12m,
        array_join(collect_set(tipo_fundo), ', ')                           as tipos_fundo_geridos,
        array_join(collect_set(classe), ', ')                               as classes_geridas,
        min(dt_inicio_atividade)                                            as fundo_mais_antigo

    from fundos
    where cnpj_gestor is not null
    group by cnpj_gestor, gestor
),

final as (
    select
        {{ dbt_utils.generate_surrogate_key(['cnpj_gestor']) }}             as sk_gestor,
        cnpj_gestor,
        nome_gestor,
        qtd_fundos_geridos,
        round(aum_total_maximo, 2)                                          as aum_total_maximo,
        fundos_com_historico_12m,
        tipos_fundo_geridos,
        classes_geridas,
        fundo_mais_antigo
    from gestores
)

select * from final
