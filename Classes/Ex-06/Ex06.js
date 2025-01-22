/* Crie uma classe Pessoa com uma propriedade privada _nome. Adicione:

Um getter para acessar o nome.
Um setter para modificar o nome, validando que ele não pode ser vazio.
Resposta:*/

class Pessoa{
    constructor(nome){
        this._nome = nome;
    }

    get nome(){
       return this._nome;
    }
    set nome(novoNome){
        if(novoNome){
            
            this._nome = novoNome; 
        }else{
        console.log("O nome não pode ser vazio.");
        }   
    }
}

const p1 = new Pessoa("Will")

console.log(p1.nome);

p1.nome = "Maria";

console.log(p1.nome);


