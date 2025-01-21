//Extraia nome e cidade do objeto abaixo:

const usuario = {
    dados: {
        nome: "Ana",
        cidade: "Curitiba",
    },
    idade: 22,
};

const{
    dados:{
        nome, cidade},
    } = usuario
    

console.log(nome);
console.log(cidade);

