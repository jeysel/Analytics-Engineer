# 💰 Orçamento Público — Pipeline de Dados  
### Fontes iniciais: SICONFI, Transparência SC

Este projeto implementa um pipeline completo para coleta, padronização, modelagem e análise de **dados orçamentários públicos**, com foco em:

- Planejamento (PPA)  
- Diretrizes (LDO)  
- Execução (LOA)  
- Execução financeira e contábil  

As fontes iniciais incluem:

- **SICONFI** — Sistema de Informações Contábeis e Fiscais  
- **Transparência SC** — Execução orçamentária estadual  

---

## ❓ Por que este projeto é importante?

O ciclo orçamentário é o coração da gestão pública.  
Entender **o que foi planejado**, **o que foi autorizado** e **o que foi executado** permite:

- Avaliar eficiência do gasto público  
- Identificar áreas com subexecução crônica  
- Monitorar políticas públicas  
- Acompanhar metas físicas e financeiras  
- Aumentar transparência e controle social  

Este pipeline transforma dados dispersos em **informação estruturada e analítica**.

---

## 🎯 Objetivos do Projeto

- Criar pipeline de ingestão para dados orçamentários  
- Padronizar dados em uma camada staging  
- Modelar entidades principais (programas, ações, dotações, execuções)  
- Construir marts analíticos com indicadores fiscais  
- Documentar arquitetura, decisões e glossário  
- Demonstrar práticas reais de Analytics Engineering  

---

## 🧱 Arquitetura do Pipeline

### **Ingestão**
- SICONFI (PPA, LDO, LOA, Execução)  
- Transparência SC  
- Configuração via `config.yaml`  

### **Staging**
- Normalização de campos  
- Padronização de classificações orçamentárias  
- Validações de qualidade  

### **Core**
Entidades principais:
- Programa  
- Ação  
- Dotação  
- Execução  
- Meta física (opcional)  

### **Marts**
Indicadores analíticos:
- Dotação inicial vs atualizada  
- Percentual de execução  
- Subexecução por programa  
- Execução por função e subfunção  
- Ranking de áreas com maior impacto financeiro  

---

## 📁 Estrutura do Projeto

*(ver estrutura completa no repositório)*

---

## 🚦 Status do Projeto

- **Backlog**  
- Ingestão SICONFI → Backlog  
- Modelagem Core → Backlog  
- Marts Analíticos → Backlog  

---

## 🗺️ Roadmap Inicial

- [ ] Criar estrutura de pastas  
- [ ] Implementar ingestão SICONFI  
- [ ] Criar camada staging  
- [ ] Criar modelagem core  
- [ ] Criar marts analíticos  
- [ ] Documentar arquitetura  
- [ ] Criar testes unitários  

---

## 📄 Licença
Uso educacional e demonstrativo.