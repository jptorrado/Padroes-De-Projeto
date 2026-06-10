// 1. A interface da Estratégia
interface EstratégiaDePagamento {
    pagar(quantia: number): void;
}

// 2. Estratégias Concretas
class PagamentoCartaoCredito implements EstratégiaDePagamento {
    pagar(quantia: number): void {
        console.log(`Pagamento de R$${quantia} aprovado via Cartão de Crédito.`);
    }
}

class PagamentoPayPal implements EstratégiaDePagamento {
    pagar(quantia: number): void {
        console.log(`Pagamento de R$${quantia} processado via PayPal.`);
    }
}

class PagamentoPix implements EstratégiaDePagamento {
    pagar(quantia: number): void {
        console.log(`Pagamento de R$${quantia} recebido instantaneamente via Pix.`);
    }
}

// 3. O Contexto que delega o trabalho
class CarrinhoDeCompras {
    // CORREÇÃO: Usamos '?' para indicar que a propriedade pode começar vazia (undefined)
    private estrategia?: EstratégiaDePagamento;

    // Define a estratégia dinamicamente
    public setEstrategia(estrategia: EstratégiaDePagamento) {
        this.estrategia = estrategia;
    }

    public finalizarCompra(quantia: number): void {
        // A trava de segurança que garante que não chamaremos 'pagar' em algo indefinido
        if (!this.estrategia) {
            throw new Error("Selecione um método de pagamento antes de finalizar.");
        }
        this.estrategia.pagar(quantia);
    }
}

// Uso do Padrão
const carrinho = new CarrinhoDeCompras();

carrinho.setEstrategia(new PagamentoPix());
carrinho.finalizarCompra(250.00); // Saída: Pagamento de R$250 recebido instantaneamente via Pix.

// Mudando a estratégia em tempo de execução
carrinho.setEstrategia(new PagamentoCartaoCredito());
carrinho.finalizarCompra(100.00); // Saída: Pagamento de R$100 aprovado via Cartão de Crédito.