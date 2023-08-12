class CaixaDaLanchonete {
    constructor() {
        // Definição do cardápio com descrição, valor e indicação de ser extra ou não
        this.cardapio = {
            cafe: { descricao: 'Café', valor: 3.00, extra: false },
            chantily: { descricao: 'Chantily (extra do Café)', valor: 1.50, extra: true },
            suco: { descricao: 'Suco Natural', valor: 6.20, extra: false },
            sanduiche: { descricao: 'Sanduíche', valor: 6.50, extra: false },
            queijo: { descricao: 'Queijo (extra do Sanduíche)', valor: 2.00, extra: true },
            salgado: { descricao: 'Salgado', valor: 7.25, extra: false },
            combo1: { descricao: '1 Suco e 1 Sanduíche', valor: 9.50, extra: false },
            combo2: { descricao: '1 Café e 1 Sanduíche', valor: 7.50, extra: false },
        };

        // Definição das taxas e descontos
        this.descontoDinheiro = 0.05;
        this.acrescimoCredito = 0.03;
    }

    // Método para calcular o valor da compra
    calcularValorDaCompra(formaDePagamento, itens) {
        let valorTotal = 0;

        // Verificação da forma de pagamento válida
        if (!['dinheiro', 'debito', 'credito'].includes(formaDePagamento)) {
            return "Forma de pagamento inválida!";
        }

        // Para rastrear os extras e suas quantidades
        const extras = {};
        // Para rastrear os itens principais e suas quantidades
        const itensPrincipais = {};

        for (const item of itens) {
            const [codigo, quantidade] = item.split(',');
            const cardapioItem = this.cardapio[codigo];

            // Verificação de item inválido
            if (!cardapioItem) {
                return "Item inválido!";
            }

            // Verificação de quantidade inválida
            if (isNaN(parseInt(quantidade)) || parseInt(quantidade) < 1) {
                return "Quantidade inválida!";
            }

            // Cálculo do valor total
            valorTotal += cardapioItem.valor * parseInt(quantidade);

            // Rastreamento de itens extras
            if (cardapioItem.extra) {
                const itemPrincipal = codigo === 'chantily' ? 'cafe' : 'sanduiche';
                extras[itemPrincipal] = extras[itemPrincipal]
                    ? extras[itemPrincipal] + parseInt(quantidade)
                    : parseInt(quantidade);
            } else {
                // Rastreamento de itens principais
                itensPrincipais[codigo] = itensPrincipais[codigo]
                    ? itensPrincipais[codigo] + parseInt(quantidade)
                    : parseInt(quantidade);
            }
        }

        // Verificação de carrinho vazio
        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        // Verificação de itens extras sem principais correspondentes
        for (const itemPrincipal in extras) {
            const quantidadeExtra = extras[itemPrincipal];
            if (!itensPrincipais[itemPrincipal] || quantidadeExtra > itensPrincipais[itemPrincipal]) {
                return "Item extra não pode ser pedido sem o principal";
            }
        }

        // Aplicação de desconto em dinheiro
        if (formaDePagamento === 'dinheiro') {
            valorTotal *= (1 - this.descontoDinheiro);
        }

        // Aplicação de acréscimo no crédito
        if (formaDePagamento === 'credito') {
            valorTotal *= (1 + this.acrescimoCredito);
        }

        // Formatação do valor total
        const valorFormatado = valorTotal.toFixed(2).replace('.', ',');

        return `R$ ${valorFormatado}`;
    }
}

export { CaixaDaLanchonete };
