# CAIXA DA LANCHONETE

- ## [Deasfio](https://github.com/Guilhermedsc/desafio-guilherme-santos#breve-resumo-sobre-o-desafio)
- ## [Explicando código](https://github.com/Guilhermedsc/desafio-guilherme-santos#explicando-o-c%C3%B3digo)

<!-- ## COMO BAIXAR O CÓDIGO E SUBMETER MINHA SOLUÇÃO?
Para completar a etapa do desafio você terá que baixar a estrutura do código aqui na Azure, resolver o desafio e entregá-lo no repositório no seu github.

### BAIXANDO A ESTRUTURA
Para baixar a estrutura no formato zip, basta clicar neste [link](https://dev.azure.com/db-tecnologia/371ab069-cd1e-4ede-8ae5-fa54dd981c56/_apis/git/repositories/a3a8fe92-b324-4d6b-abbd-1953e46fb075/items?path=/&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=main&resolveLfs=true&%24format=zip&api-version=5.0&download=true).


### ENTREGANDO O DESAFIO
Após resolver o desafio e validá-lo com os testes (mais detalhes nos tópicos abaixo), você terá que criar um repositório no [Github](https://github.com/) com o nome de `desafio-$seunome-$sobrenome` (substitua os nomes com $ pelo seu próprio nome e sobrenome). Deṕos disso, você pode enviar o link do seu repositório para que possamos validá-lo para o e-mail: `start@dbserver.com.br`

Se você ainda não teve contato com essas ferramentas, não tem problema, separamos um material para lhe ajudar nessa etapa: [Como usar Git e Github na prática](https://www.youtube.com/watch?v=UBAX-13g8OM). -->

## BREVE RESUMO SOBRE O DESAFIO
Foi proposto pelo Programa Estágio Start DB da [DB](https://db.tec.br/). Esse é um desafio técnico de JavaScript que tem como objetivo avaliar o meu conhecimento na linguagem e minha capacidade de resolver problemas. 

## O DESAFIO
Olá! Você foi contratado para automatizar o caixa da Lanchonete da DB.
Sua missão será construir a lógica que calcula o valor de uma compra de acordo com o cardápio, regras e descontos da Lanchonete.

### CARDÁPIO

  | codigo    | descrição                   | valor   |
  |-----------|-----------------------------|---------|
  | cafe      | Café                        | R$ 3,00 |
  | chantily  | Chantily (extra do Café)    | R$ 1,50 |
  | suco      | Suco Natural                | R$ 6,20 |
  | sanduiche | Sanduíche                   | R$ 6,50 |
  | queijo    | Queijo (extra do Sanduíche) | R$ 2,00 |
  | salgado   | Salgado                     | R$ 7,25 |
  | combo1    | 1 Suco e 1 Sanduíche        | R$ 9,50 |
  | combo2    | 1 Café e 1 Sanduíche        | R$ 7,50 |


### FORMAS DE PAGAMENTO
Atualmente a Lanchonete aceita as seguintes formas de pagamento:
 - dinheiro
 - debito
 - credito

O sistema deve receber essa informação como string, utilizando a grafia exatamente igual aos exemplos acima.

### DESCONTOS E TAXAS
 - Pagamento em dinheiro tem 5% de desconto
 - Pagamento a crédito tem acréscimo de 3% no valor total

### OUTRAS REGRAS

- Caso item extra seja informado num pedido que não tenha o respectivo item principal, apresentar mensagem "Item extra não pode ser pedido sem o principal".
- Combos não são considerados como item principal.
- É possível pedir mais de um item extra sem precisar de mais de um principal.
- Se não forem pedidos itens, apresentar mensagem "Não há itens no carrinho de compra!"
- Se a quantidade de itens for zero, apresentar mensagem "Quantidade inválida!".
- Se o código do item não existir, apresentar mensagem "Item inválido!"
- Se a forma de pagamento não existir, apresentar mensagem "Forma de pagamento inválida!"

### O CÓDIGO
Você está recebendo uma estrutura básica para desenvolver a lógica do caixa. O arquivo principal está localizado dentro da pasta `src` e se chama `caixa-da-lanchonete.js`. Você pode desenvolver a sua lógica criando outros arquivos, métodos e até mesmo outras classes, porém o resultado deve poder ser obtido através do método `calcularValorDaCompra`.

> ALERTA:
> É importante que a estrutura básica descrita acima não seja alterada, incluindo nome e parâmetros do método. Iremos validar sua solução através destes, assim como você pode validar através dos cenários de testes já implementados em `src/caixa-da-lanchonete.test.js`.

### INSTALANDO E RODANDO NA SUA MÁQUINA
1. Instalar o [Node](https://nodejs.org/en/)
2. Instalar dependencias do projeto com o seguinte comando:
```bash
npm install
```

### VALIDANDO A SOLUÇÃO
Junto com a estrutura básica você está recebendo alguns cenários de testes para auxiliar na validação da sua solução. Recomendamos que você crie mais casos de teste para aumentar a confiabilidade da sua solução.
Para testar sua solução com os cenários já criados, basta rodar o seguinte comando:
```bash
npm test
```

Para saber mais consulte a [Documentação do Jest](https://jestjs.io/pt-BR/docs/getting-started).

### INPUTS
O método `calcularValorDaCompra` recebe dois parâmetros, `formaDePagamento` e `itens`, sendo o primeiro uma string com os possíveis valores válidos: `debito`, `credito` e `dinheiro`. O segundo parâmetro contém uma array dos itens que serão comprados. Cada item é uma string contendo o código do item e a quantidade do mesmo separados por uma vírgula.
EXEMPLO:
```js
['cafe,1','chantily,1']
```

### OUPUTS
O retorno do método `calcularValorDaCompra` deve ser sempre uma string e conteúdo dela pode ser ou o valor total da compra ou uma mensagem de erro conforme as regras descritas anteriormente. O valor da compra deve ser formatado com `R$` e decimais separados por vírgula.

Para padronizar a quantidade de decimais, utilize o método `toFixed` do JavaScript. Esse método serve o propósito deste desafio, porém na vida real a regra de arredondamento deve ser conferida! Para saber mais consulte a [Documentação do Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed).
EXEMPLO:
```js
// exemplo de saída do valor da compra
"R$ 6,00"

// exemplo de saída de erro
"Forma de pagamento inválida!"
```

### EXEMPLOS

EXEMPLO 1: Compra de chantily sem café.
```js
new CaixaDaLanchonete()
  .calcularValorDaCompra('debito', ['chantily,1']);
```
O resultado esperado deve ser:
```
"Item extra não pode ser pedido sem o principal"
```

<br/>

EXEMPLO 2: Compra de café com chantily.
```js
new CaixaDaLanchonete()
  .calcularValorDaCompra('debito', ['cafe,1','chantily,1']);
```
O resultado esperado deve ser:
```
"R$ 4,50"
```

<br/>

EXEMPLO 3: Compra de combo e dois cafés
```js
new CaixaDaLanchonete()
  .calcularValorDaCompra('credito', ['combo1,1','cafe,2']);
```
O resultado esperado deve ser:
```
"R$ 15,96"
```

### EXPLICANDO O CÓDIGO
Abaixo estarei explicando o código que foi desenvolvido para resolver o desafio. Será divido em partes do código e explicações dessas mesmas partes. [Clique aqui para ir para o código](src\caixa-da-lanchonete.js)

Vale ressaltar o arquivo de teste, ele também foi modificado para adcionar 11 novos testes. [Clique aqui para ir para o arquivo de teste](src\caixa-da-lanchonete.test.js)

### Construtor e Inicialização
```js
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
```
Neste trecho, estou definindo o construtor da classe **CaixaDaLanchonete**. Aqui, o cardápio é criado, com cada item representado por um objeto contendo a descrição, valor e se é um extra. As taxas e descontos também são definidos para uso posterior no cálculo do valor da compra.


### Método calcularValorDaCompra
```js
calcularValorDaCompra(formaDePagamento, itens) {
    let valorTotal = 0; // Variável para armazenar o valor total da compra

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

        // Verificação de item principal
        if (!codigo.startsWith('combo')) {
            principalEncontrado = true;
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

    // Verificação de item extra sem principal
    if (!principalEncontrado) {
        return "Item extra não pode ser pedido sem o principal";
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
```
Neste trecho, temos o método **calcularValorDaCompra**, que realiza o cálculo do valor total da compra com base na forma de pagamento e nos itens selecionados. Aqui estão algumas partes-chave deste método:

- **Verificação da Forma de Pagamento:** Primeiro, verifico se a forma de pagamento é válida (dinheiro, débito ou crédito). Se não for, retornamos uma mensagem de erro.

- **Rastreamento de Extras e Itens Principais:** Utilizo os objetos **extras** e **itensPrincipais** para rastrear os extras pedidos e seus respectivos itens principais. Isso é importante para verificar se um extra está sendo pedido sem o principal correspondente.

- **Cálculo do Valor Total:** Percorro a lista de itens fornecida, obtendo o valor de cada item no cardápio e multiplicando pela quantidade solicitada. O resultado é acumulado na variável **valorTotal**.

- **Verificações de Validação:** Várias verificações são feitas, como se um item é inválido, se a quantidade é inválida e se um extra está sendo pedido sem o principal correspondente.

- **Aplicação de Desconto e Acréscimo:** Se a forma de pagamento for em dinheiro, aplicamos um desconto, e se for crédito, aplicamos um acréscimo ao valor total.

- **Formatação do Valor Total:** Finalmente, formatamos o valor total com duas casas decimais e o símbolo de moeda.