/*Extraia nome e idade do objeto. Caso idade não exista, atribua o valor padrão 18.*/

const usuario = {
    nome: "Otavia",
}

const{nome, idade = 18} = usuario

console.log(nome);
console.log(idade);

