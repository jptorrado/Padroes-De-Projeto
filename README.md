# Catálogo de Design Patterns

> **Disclaimer:** Trabalho realizado com auxílio do modelo 3.1 Pro do LLM Google Gemini.

Este repositório contém a implementação prática e documentação de três Design Patterns fundamentais (Criacional, Estrutural e Comportamental), baseados no catálogo do [Refactoring Guru](https://refactoring.guru/pt-br/design-patterns).

O objetivo deste projeto é demonstrar não apenas *como* escrever o código, mas *por que* essas estruturas arquiteturais são essenciais para manter o código escalável, testável e de fácil manutenção. As implementações foram feitas em **TypeScript**.

---

## 1. Factory Method (Padrão Criacional)

**Contexto:** Sistemas de logística onde novos modais de transporte (marítimo, aéreo) precisam ser adicionados constantemente sem quebrar o código existente.

* **O Problema:** Acoplamento forte a classes concretas. Se o código cliente instancia `new Caminhao()` diretamente, adicionar `new Navio()` exigirá modificações em toda a regra de negócio.
* **A Solução:** Delega-se a responsabilidade de criação para subclasses através de um método abstrato `criarTransporte()`. O código cliente interage apenas com a interface `Transporte`.
* **Onde encontrar no repositório:** Verifique o arquivo `factory_method.ts`.

---

## 2. Adapter (Padrão Estrutural)

**Contexto:** Integração de sistemas legados ou bibliotecas de terceiros incompatíveis com a arquitetura moderna da aplicação.

* **O Problema:** Nossa aplicação trabalha exclusivamente com JSON, mas precisamos consumir uma API externa de gráficos que só aceita XML. Alterar nossa aplicação ou a API externa é inviável.
* **A Solução:** Criamos uma classe *Adapter* que implementa a interface da nossa aplicação (JSON), mas encapsula e traduz as requisições para o formato da biblioteca de terceiros (XML).
* **Onde encontrar no repositório:** Verifique o arquivo `adapter.ts`.

---

## 3. Strategy (Padrão Comportamental)

**Contexto:** Sistemas de e-commerce com múltiplos métodos de pagamento (Pix, Cartão, PayPal) cujas regras de negócio mudam frequentemente.

* **O Problema:** Classes de processamento inchadas e complexas com cadeias de condicionais (`if/else` ou `switch/case`) gigantescas para decidir como processar o pagamento.
* **A Solução:** Isola-se cada algoritmo de pagamento em sua própria classe (Estratégia). A classe principal do carrinho de compras não sabe *como* o pagamento é feito, ela apenas delega a execução para a Estratégia injetada em tempo de execução.
* **Onde encontrar no repositório:** Verifique o arquivo `strategy.ts`.

---

## Como Executar

Para rodar os exemplos deste repositório, certifique-se de ter o [Node.js](https://nodejs.org/) instalado e execute:

```bash
# Instale o compilador TypeScript globalmente (caso não tenha)
npm install -g typescript ts-node

# Execute qualquer um dos arquivos diretamente
ts-node factory_method.ts
ts-node adapter.ts
ts-node strategy.ts
```

---

## Referências

A fundamentação teórica e a base conceitual para a documentação destes padrões foram extraídas do **Refactoring Guru**. Recomendo a leitura do catálogo completo:
* [Refactoring Guru - Design Patterns (PT-BR)](https://refactoring.guru/pt-br/design-patterns)