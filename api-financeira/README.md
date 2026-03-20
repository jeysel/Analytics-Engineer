# 📈 API Financeira — Pipeline de Dados  
### Fontes iniciais: Banco Central (SGS), CVM, Tesouro Direto

Este projeto implementa um pipeline completo para ingestão, padronização, modelagem e análise de **dados financeiros públicos**, com foco em:

- Séries históricas do Banco Central  
- Fundos de investimento (CVM)  
- Títulos públicos (Tesouro Direto)  

---

## ❓ Por que este projeto é importante?

Dados financeiros são essenciais para:

- Análises macroeconômicas  
- Estudos de mercado  
- Avaliação de risco  
- Comparação de investimentos  
- Construção de indicadores  

Este pipeline consolida dados de múltiplas fontes em um modelo analítico consistente.

---

## 🎯 Objetivos do Projeto

- Criar pipeline de ingestão para APIs financeiras  
- Padronizar séries temporais em staging  
- Modelar entidades principais (indicadores, fundos, títulos)  
- Construir marts analíticos com métricas financeiras  
- Documentar arquitetura e decisões  
- Demonstrar práticas reais de Analytics Engineering  

---

## 🧱 Arquitetura do Pipeline

### **Ingestão**
- Banco Central (SGS)  
- CVM (fundos)  
- Tesouro Direto  
- Configuração via `config.yaml`  

### **Staging**
- Padronização de datas  
- Conversão de valores  
- Normalização de séries temporais  

### **Core**
Entidades principais:
- Indicador econômico  
- Fundo de investimento  
- Título público  
- Benchmark  

### **Marts**
Indicadores analíticos:
- Rentabilidade acumulada  
- Volatilidade  
- Correlação entre indicadores  
- Comparação com benchmarks  
- Ranking de fundos  

---

## 📁 Estrutura do Projeto

*(ver estrutura completa no repositório)*

---

## 🚦 Status do Projeto

- **Backlog**  
- Ingestão BCB → Backlog  
- Ingestão CVM → Backlog  
- Ingestão Tesouro → Backlog  
- Modelagem Core → Backlog  
- Marts Analíticos → Backlog  

---

## 🗺️ Roadmap Inicial

- [ ] Criar estrutura de pastas  
- [ ] Implementar ingestão BCB  
- [ ] Implementar ingestão CVM  
- [ ] Implementar ingestão Tesouro  
- [ ] Criar camada staging  
- [ ] Criar modelagem core  
- [ ] Criar marts analíticos  
- [ ] Documentar arquitetura  
- [ ] Criar testes unitários  

---

## 📄 Licença
Uso educacional e demonstrativo.

