//Crie uma função que receba um objeto produto e extraia nome e preco.

const produto = { nome: "Notebook", preco: 2500 };

function exibirProduto({ nome, preco }) {
    console.log(`Produto: ${nome}, Preço: R$${preco}`);
}

exibirProduto(produto);
// Produto: Notebook, Preço: R$2500
