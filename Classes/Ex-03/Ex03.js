/* Crie uma classe Pessoa com:

Uma propriedade privada _nome.
Um getter para acessar o nome.
Um setter para modificar o nome, mas apenas se ele for uma string com mais de 3 caracteres.*/

class Pessoa{
    constructor(nome){
        this._nome = nome;
    }
    get nome(){
        return this._nome;
    }

    set nome(novoNome){
        if(typeof novoNome === "string" && novoNome.length > 3){
            this._nome = novoNome;
        } else{
            console.log("O nome deve ter mais que 3 caracteres");
            
        }
    }
}

const pessoa = new Pessoa("Ana");
console.log(pessoa.nome); // Ana

pessoa.nome = "Jo"; // O nome deve ter mais de 3 caracteres.
pessoa.nome = "João";
console.log(pessoa.nome); // João