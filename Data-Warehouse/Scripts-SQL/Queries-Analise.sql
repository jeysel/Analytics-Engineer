-- =============================================================================
-- BLOCO 1: ANÁLISES DE RECEITA
-- =============================================================================

-- 1.1 Receita total, ticket médio e total de transações por produto
--     Apenas versão atual do produto (SCD Tipo 2: ativo = true)
SELECT
    p.nome                                          AS produto,
    p.categoria,
    COUNT(*)                                        AS total_transacoes,
    SUM(f.quantidade)                               AS unidades_vendidas,
    SUM(f.valor_venda)                              AS receita_total,
    ROUND(AVG(f.valor_venda), 2)                    AS ticket_medio,
    ROUND(SUM(f.valor_venda) / SUM(SUM(f.valor_venda)) OVER () * 100, 2) AS pct_receita
FROM dw.fato_venda f
JOIN dw.dim_produto p ON f.sk_produto = p.sk_produto
WHERE p.ativo = true
GROUP BY p.nome, p.categoria
ORDER BY receita_total DESC;


-- 1.2 Receita acumulada mês a mês com crescimento percentual
WITH vendas_mensais AS (
    SELECT
        d.ano,
        d.mes,
        SUM(f.valor_venda)  AS receita_mes
    FROM dw.fato_venda f
    JOIN dw.dim_data d ON f.sk_data = d.sk_data
    GROUP BY d.ano, d.mes
)
SELECT
    ano,
    mes,
    receita_mes,
    SUM(receita_mes) OVER (PARTITION BY ano ORDER BY mes)   AS receita_acumulada_ano,
    LAG(receita_mes) OVER (ORDER BY ano, mes)               AS receita_mes_anterior,
    ROUND(
        (receita_mes - LAG(receita_mes) OVER (ORDER BY ano, mes))
        / NULLIF(LAG(receita_mes) OVER (ORDER BY ano, mes), 0) * 100
    , 2)                                                    AS crescimento_pct_mom
FROM vendas_mensais
ORDER BY ano, mes;


-- 1.3 Receita por categoria com participação relativa e ranking
SELECT
    p.categoria,
    SUM(f.valor_venda)                                              AS receita_total,
    ROUND(SUM(f.valor_venda) / SUM(SUM(f.valor_venda)) OVER () * 100, 2) AS pct_total,
    RANK() OVER (ORDER BY SUM(f.valor_venda) DESC)                 AS ranking
FROM dw.fato_venda f
JOIN dw.dim_produto p ON f.sk_produto = p.sk_produto
WHERE p.ativo = true
GROUP BY p.categoria
ORDER BY ranking;


-- =============================================================================
-- BLOCO 2: ANÁLISES DE CANAL
-- =============================================================================

-- 2.1 Performance por canal: receita, volume e ticket médio
SELECT
    c.nome                              AS canal,
    c.tipo,
    c.regiao                            AS regiao_atual,
    COUNT(*)                            AS total_transacoes,
    SUM(f.quantidade)                   AS unidades_vendidas,
    SUM(f.valor_venda)                  AS receita_total,
    ROUND(AVG(f.valor_venda), 2)        AS ticket_medio
FROM dw.fato_venda f
JOIN dw.dim_canal c ON f.sk_canal = c.sk_canal
GROUP BY c.nome, c.tipo, c.regiao
ORDER BY receita_total DESC;


-- 2.2 Canais que mudaram de região (SCD Tipo 3) com impacto em vendas
--     Compara receita no período antes e após a mudança de região
SELECT
    c.id_canal,
    c.nome                              AS canal,
    c.regiao_anterior,
    c.regiao                            AS regiao_atual,
    SUM(f.valor_venda)                  AS receita_total_pos_mudanca,
    COUNT(*)                            AS transacoes_pos_mudanca
FROM dw.dim_canal c
JOIN dw.fato_venda f ON c.sk_canal = f.sk_canal
WHERE c.regiao_anterior IS NOT NULL
GROUP BY c.id_canal, c.nome, c.regiao_anterior, c.regiao
ORDER BY c.id_canal;


-- 2.3 Heatmap de receita: produto × canal (matriz cruzada)
SELECT
    p.nome                              AS produto,
    c.nome                              AS canal,
    SUM(f.valor_venda)                  AS receita,
    SUM(f.quantidade)                   AS unidades
FROM dw.fato_venda f
JOIN dw.dim_produto p ON f.sk_produto = p.sk_produto
JOIN dw.dim_canal c  ON f.sk_canal  = c.sk_canal
WHERE p.ativo = true
GROUP BY p.nome, c.nome
ORDER BY p.nome, receita DESC;


-- =============================================================================
-- BLOCO 3: ANÁLISES DE CLIENTE (RFM)
-- =============================================================================

-- 3.1 Top 10 clientes por receita com participação percentual
SELECT
    c.nome                                                              AS cliente,
    c.cidade,
    c.estado,
    COUNT(*)                                                            AS total_compras,
    SUM(f.quantidade)                                                   AS unidades_compradas,
    SUM(f.valor_venda)                                                  AS receita_total,
    ROUND(SUM(f.valor_venda) / SUM(SUM(f.valor_venda)) OVER () * 100, 2) AS pct_receita
FROM dw.fato_venda f
JOIN dw.dim_cliente c ON f.sk_cliente = c.sk_cliente
GROUP BY c.nome, c.cidade, c.estado
ORDER BY receita_total DESC
LIMIT 10;


-- 3.2 Segmentação RFM simplificada -> Recência (último ano com compra), Frequência (nº transações), Monetário (receita)
WITH rfm_base AS (
    SELECT
        c.sk_cliente,
        c.nome                          AS cliente,
        MAX(d.ano)                      AS ultimo_ano_compra,
        COUNT(*)                        AS frequencia,
        SUM(f.valor_venda)              AS monetario
    FROM dw.fato_venda f
    JOIN dw.dim_cliente c ON f.sk_cliente = c.sk_cliente
    JOIN dw.dim_data d    ON f.sk_data    = d.sk_data
    GROUP BY c.sk_cliente, c.nome
),
rfm_scores AS (
    SELECT
        *,
        NTILE(3) OVER (ORDER BY ultimo_ano_compra DESC) AS score_recencia,
        NTILE(3) OVER (ORDER BY frequencia DESC)        AS score_frequencia,
        NTILE(3) OVER (ORDER BY monetario DESC)         AS score_monetario
    FROM rfm_base
)
SELECT
    cliente,
    ultimo_ano_compra,
    frequencia,
    ROUND(monetario, 2)                 AS monetario,
    score_recencia,
    score_frequencia,
    score_monetario,
    (score_recencia + score_frequencia + score_monetario) AS rfm_total,
    CASE
        WHEN (score_recencia + score_frequencia + score_monetario) >= 8 THEN 'Champions'
        WHEN (score_recencia + score_frequencia + score_monetario) >= 6 THEN 'Leais'
        WHEN (score_recencia + score_frequencia + score_monetario) >= 4 THEN 'Em Risco'
        ELSE 'Perdidos'
    END                                 AS segmento_rfm
FROM rfm_scores
ORDER BY rfm_total DESC;


-- 3.3 Distribuição geográfica de vendas por estado
SELECT
    c.estado,
    COUNT(DISTINCT c.sk_cliente)        AS clientes_ativos,
    COUNT(*)                            AS total_transacoes,
    SUM(f.valor_venda)                  AS receita_total,
    ROUND(AVG(f.valor_venda), 2)        AS ticket_medio
FROM dw.fato_venda f
JOIN dw.dim_cliente c ON f.sk_cliente = c.sk_cliente
GROUP BY c.estado
ORDER BY receita_total DESC;


-- =============================================================================
-- BLOCO 4: ANÁLISES TEMPORAIS
-- =============================================================================

-- 4.1 Crescimento de vendas por categoria
WITH receita_anual AS (
    SELECT
        p.categoria,
        d.ano,
        SUM(f.valor_venda)  AS receita
    FROM dw.fato_venda f
    JOIN dw.dim_produto p ON f.sk_produto = p.sk_produto
    JOIN dw.dim_data d    ON f.sk_data    = d.sk_data
    WHERE p.ativo = true
    GROUP BY p.categoria, d.ano
)
SELECT
    categoria,
    ano,
    receita,
    LAG(receita) OVER (PARTITION BY categoria ORDER BY ano)     AS receita_ano_anterior,
    ROUND(
        (receita - LAG(receita) OVER (PARTITION BY categoria ORDER BY ano))
        / NULLIF(LAG(receita) OVER (PARTITION BY categoria ORDER BY ano), 0) * 100
    , 2)                                                        AS crescimento_yoy_pct
FROM receita_anual
ORDER BY categoria, ano;


-- 4.2 Sazonalidade: receita média por mês (todos os anos consolidados)
SELECT
    d.mes,
    TO_CHAR(TO_DATE(d.mes::TEXT, 'MM'), 'Month')    AS nome_mes,
    COUNT(*)                                         AS total_transacoes,
    ROUND(AVG(f.valor_venda), 2)                     AS ticket_medio_mensal,
    SUM(f.valor_venda)                               AS receita_total_historica,
    ROUND(AVG(SUM(f.valor_venda)) OVER (), 2)        AS media_mensal_geral
FROM dw.fato_venda f
JOIN dw.dim_data d ON f.sk_data = d.sk_data
GROUP BY d.mes
ORDER BY d.mes;


-- 4.3 Receita com média móvel de 3 meses (suavização de tendência)
WITH vendas_mensais AS (
    SELECT
        d.ano,
        d.mes,
        SUM(f.valor_venda) AS receita
    FROM dw.fato_venda f
    JOIN dw.dim_data d ON f.sk_data = d.sk_data
    GROUP BY d.ano, d.mes
)
SELECT
    ano,
    mes,
    receita,
    ROUND(
        AVG(receita) OVER (
            ORDER BY ano, mes
            ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
        ), 2
    )                           AS media_movel_3m
FROM vendas_mensais
ORDER BY ano, mes;


-- =============================================================================
-- BLOCO 5: ANÁLISES DE PRODUTO COM SCD TIPO 2
-- =============================================================================

-- 5.1 Histórico completo de versões de produto (SCD Tipo 2)
SELECT
    p.id_produto,
    p.nome,
    p.categoria,
    p.data_inicio,
    COALESCE(p.data_fim::TEXT, 'vigente')           AS data_fim,
    p.ativo,
    ROW_NUMBER() OVER (
        PARTITION BY p.id_produto ORDER BY p.data_inicio
    )                                               AS versao
FROM dw.dim_produto p
ORDER BY p.id_produto, versao;


-- 5.2 Produtos que sofreram mudanças de categoria (impacto analítico do SCD2)
WITH historico AS (
    SELECT
        id_produto,
        nome,
        categoria,
        ROW_NUMBER() OVER (PARTITION BY id_produto ORDER BY data_inicio) AS versao
    FROM dw.dim_produto
)
SELECT
    h1.id_produto,
    h1.nome                         AS nome_produto,
    h1.categoria                    AS categoria_original,
    h2.categoria                    AS categoria_atual,
    COUNT(DISTINCT h2.versao)       AS total_versoes
FROM historico h1
JOIN historico h2 ON h1.id_produto = h2.id_produto
WHERE h1.versao = 1
  AND h2.versao = (SELECT MAX(versao) FROM historico h3 WHERE h3.id_produto = h1.id_produto)
  AND h1.categoria <> h2.categoria
GROUP BY h1.id_produto, h1.nome, h1.categoria, h2.categoria
ORDER BY h1.id_produto;


-- 5.3 Receita por produto considerando TODAS as versões históricas
--     (análise correta quando o produto mudou de categoria durante o período)
SELECT
    p.id_produto,
    p.nome,
    p.categoria,
    p.data_inicio,
    COALESCE(p.data_fim::TEXT, 'vigente')   AS data_fim,
    COUNT(f.sk_produto)                     AS transacoes_nesta_versao,
    COALESCE(SUM(f.valor_venda), 0)         AS receita_nesta_versao
FROM dw.dim_produto p
LEFT JOIN dw.fato_venda f ON p.sk_produto = f.sk_produto
GROUP BY p.id_produto, p.nome, p.categoria, p.data_inicio, p.data_fim
ORDER BY p.id_produto, p.data_inicio;


-- =============================================================================
-- BLOCO 6: RANKING E WINDOW FUNCTIONS AVANÇADAS
-- =============================================================================

-- 6.1 Ranking de clientes por receita dentro de cada estado (RANK + PARTITION)
SELECT
    c.estado,
    c.nome                                              AS cliente,
    SUM(f.valor_venda)                                  AS receita,
    RANK() OVER (
        PARTITION BY c.estado ORDER BY SUM(f.valor_venda) DESC
    )                                                   AS ranking_no_estado,
    DENSE_RANK() OVER (ORDER BY SUM(f.valor_venda) DESC) AS ranking_geral
FROM dw.fato_venda f
JOIN dw.dim_cliente c ON f.sk_cliente = c.sk_cliente
GROUP BY c.estado, c.nome
ORDER BY c.estado, ranking_no_estado;


-- 6.2 Top 3 produtos por receita dentro de cada canal (TOP-N por grupo)
WITH receita_produto_canal AS (
    SELECT
        c.nome                      AS canal,
        p.nome                      AS produto,
        SUM(f.valor_venda)          AS receita,
        RANK() OVER (
            PARTITION BY c.nome ORDER BY SUM(f.valor_venda) DESC
        )                           AS rank_no_canal
    FROM dw.fato_venda f
    JOIN dw.dim_produto p ON f.sk_produto = p.sk_produto
    JOIN dw.dim_canal c   ON f.sk_canal   = c.sk_canal
    WHERE p.ativo = true
    GROUP BY c.nome, p.nome
)
SELECT canal, produto, receita, rank_no_canal
FROM receita_produto_canal
WHERE rank_no_canal <= 3
ORDER BY canal, rank_no_canal;


-- 6.3 Percentil de receita por cliente (NTILE + PERCENT_RANK)
SELECT
    c.nome                                              AS cliente,
    SUM(f.valor_venda)                                  AS receita_total,
    NTILE(4) OVER (ORDER BY SUM(f.valor_venda) DESC)    AS quartil,
    ROUND(
        PERCENT_RANK() OVER (ORDER BY SUM(f.valor_venda)) * 100
    , 2)                                                AS percentil_receita
FROM dw.fato_venda f
JOIN dw.dim_cliente c ON f.sk_cliente = c.sk_cliente
GROUP BY c.nome
ORDER BY receita_total DESC;


-- =============================================================================
-- BLOCO 7: DATA QUALITY — VERIFICAÇÕES DE INTEGRIDADE
-- =============================================================================

-- 7.1 Verificar registros órfãos na fato (FK sem correspondência na dimensão)
SELECT 'dim_produto' AS dimensao, COUNT(*) AS orfaos
FROM dw.fato_venda f
LEFT JOIN dw.dim_produto p ON f.sk_produto = p.sk_produto
WHERE p.sk_produto IS NULL

UNION ALL

SELECT 'dim_canal', COUNT(*)
FROM dw.fato_venda f
LEFT JOIN dw.dim_canal c ON f.sk_canal = c.sk_canal
WHERE c.sk_canal IS NULL

UNION ALL

SELECT 'dim_data', COUNT(*)
FROM dw.fato_venda f
LEFT JOIN dw.dim_data d ON f.sk_data = d.sk_data
WHERE d.sk_data IS NULL

UNION ALL

SELECT 'dim_cliente', COUNT(*)
FROM dw.fato_venda f
LEFT JOIN dw.dim_cliente c ON f.sk_cliente = c.sk_cliente
WHERE c.sk_cliente IS NULL;


-- 7.2 Verificar consistência do SCD Tipo 2 (não deve haver sobreposição de datas)
SELECT
    p1.id_produto,
    p1.nome,
    p1.data_inicio  AS inicio_v1,
    p1.data_fim     AS fim_v1,
    p2.data_inicio  AS inicio_v2
FROM dw.dim_produto p1
JOIN dw.dim_produto p2
    ON p1.id_produto = p2.id_produto
    AND p1.sk_produto <> p2.sk_produto
    AND p1.data_fim > p2.data_inicio
WHERE p1.data_fim IS NOT NULL;
-- Resultado esperado: 0 linhas (sem sobreposição)


-- 7.3 Detectar valores nulos ou negativos em métricas da fato
SELECT
    COUNT(*)                                    AS total_registros,
    COUNT(*) FILTER (WHERE valor_venda IS NULL) AS valor_nulo,
    COUNT(*) FILTER (WHERE valor_venda < 0)     AS valor_negativo,
    COUNT(*) FILTER (WHERE quantidade IS NULL)  AS qtd_nula,
    COUNT(*) FILTER (WHERE quantidade <= 0)     AS qtd_invalida
FROM dw.fato_venda;
-- Resultado esperado: todos os contadores = 0


-- 7.4 Verificar unicidade da chave natural da fato
--     (sk_produto + sk_canal + sk_data + sk_cliente deve ser único)
SELECT
    sk_produto, sk_canal, sk_data, sk_cliente,
    COUNT(*) AS ocorrencias
FROM dw.fato_venda
GROUP BY sk_produto, sk_canal, sk_data, sk_cliente
HAVING COUNT(*) > 1;
-- Resultado esperado: 0 linhas


-- =============================================================================
-- BLOCO 8: EXECUTIVE SUMMARY (QUERY ÚNICA CONSOLIDADA)
-- =============================================================================

-- Visão executiva: KPIs gerais do DW em uma única query
SELECT
    COUNT(DISTINCT f.sk_cliente)                AS clientes_ativos,
    COUNT(DISTINCT f.sk_produto)                AS produtos_vendidos,
    COUNT(*)                                    AS total_transacoes,
    SUM(f.quantidade)                           AS unidades_vendidas,
    ROUND(SUM(f.valor_venda), 2)                AS receita_total,
    ROUND(AVG(f.valor_venda), 2)                AS ticket_medio,
    MIN(d.data_completa)                        AS primeira_venda,
    MAX(d.data_completa)                        AS ultima_venda,
    COUNT(DISTINCT d.ano)                       AS anos_cobertos
FROM dw.fato_venda f
JOIN dw.dim_data d ON f.sk_data = d.sk_data;