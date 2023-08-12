class CaixaDaLanchonete {
    calcularValorDaCompra(formaDePagamento, itens) {
        // Definir o cardápio com os valores dos itens
        const cardapio = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50,
        };

        // Definir os descontos e acréscimos
        const descontoDinheiro = 0.05;
        const acrescimoCredito = 0.03;

        // Inicializar o valor total da compra
        let valorTotal = 0;

        // Inicializar a variável para verificar se um item extra é pedido sem o principal
        let principalEncontrado = false;

        // Verificar se a forma de pagamento é válida
        if (formaDePagamento !== 'dinheiro' && formaDePagamento !== 'debito' && formaDePagamento !== 'credito') {
            return "Forma de pagamento inválida!";
        }

        // Percorrer os itens
        for (const item of itens) {
            const [codigo, quantidade] = item.split(',');
            const valorItem = cardapio[codigo];

            // Verificar se o código do item é válido
            if (!valorItem) {
                return "Item inválido!";
            }

            // Verificar se é um item principal
            if (!codigo.startsWith('combo') && !codigo.endsWith('extra')) {
                principalEncontrado = true;
            }

            // Calcular o valor total do item
            valorTotal += valorItem * parseInt(quantidade);
        }

        // Verificar se há itens no carrinho
        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        // Verificar se a quantidade de itens é válida
        if (!principalEncontrado) {
            return "Item extra não pode ser pedido sem o principal";
        }

        // Aplicar desconto se for pagamento em dinheiro
        if (formaDePagamento === 'dinheiro') {
            valorTotal *= (1 - descontoDinheiro);
        }

        // Aplicar acréscimo se for pagamento a crédito
        if (formaDePagamento === 'credito') {
            valorTotal *= (1 + acrescimoCredito);
        }

        // Formatar o valor total da compra
        const valorFormatado = valorTotal.toFixed(2).replace('.', ',');

        return `R$ ${valorFormatado}`;
    }
}

export { CaixaDaLanchonete };
