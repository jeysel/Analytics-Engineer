{{
  config(materialized = 'ephemeral')
}}

/*
  Filtra o cadastro para fundos EM FUNCIONAMENTO NORMAL com histórico de cotas
  suficiente para análises de rentabilidade (mínimo de dados após data_inicio_analise).
  Enriquece com campos derivados usados em múltiplos marts.
*/

with cadastro as (
    select * from {{ ref('stg_fundos__cadastro') }}
),

cotas_por_fundo as (
    select
        cnpj_fundo,
        count(*)            as qtd_dias_com_cota,
        min(dt_competencia) as primeira_cota,
        max(dt_competencia) as ultima_cota,
        max(vl_pl)          as pl_maximo_historico
    from {{ ref('stg_fundos__cotas_diarias') }}
    group by cnpj_fundo
),

fundos_ativos as (
    select
        c.*,
        cpf.qtd_dias_com_cota,
        cpf.primeira_cota,
        cpf.ultima_cota,
        cpf.pl_maximo_historico,

        -- Idade do fundo em anos (a partir da constituição)
        datediff(current_date(), c.dt_constituicao) / 365.25   as idade_fundo_anos,

        -- Flag: fundo tem dados suficientes para análise de 12 meses
        case
            when cpf.qtd_dias_com_cota >= 250 then true
            else false
        end                                                     as tem_historico_12m,

        -- Flag: fundo tem dados suficientes para análise de 36 meses
        case
            when cpf.qtd_dias_com_cota >= 750 then true
            else false
        end                                                     as tem_historico_36m,

        -- Flag: PL acima do mínimo configurável (evita fundos zumbi)
        case
            when cpf.pl_maximo_historico >= {{ var('pl_minimo_relevante') }} then true
            else false
        end                                                     as pl_acima_minimo

    from cadastro c
    inner join cotas_por_fundo cpf
        on c.cnpj_fundo = cpf.cnpj_fundo
    where
        c.situacao = 'EM FUNCIONAMENTO NORMAL'
        and c.dt_cancelamento is null
)

select * from fundos_ativos
