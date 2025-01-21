//Extraia o valor de nome e atribua-o à variável meuNome.

const pessoa = {
    nome: "Will",
    idade: 20,
    cidade: "São Paulo"
}

const{nome:meuNome} = pessoa;

console.log(meuNome);
