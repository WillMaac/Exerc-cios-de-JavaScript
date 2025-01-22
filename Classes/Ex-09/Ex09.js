/* Crie uma classe Livro com:

Uma propriedade privada _titulo.
Um getter que retorna o título formatado (primeira letra maiúscula).  */

class Livro{
    constructor(titulo){
        this._titulo = titulo;
    }

    get titulo(){
        return this._titulo.charAt(0).toUpperCase() + this._titulo.slice(1);

    }
}

const livro = new Livro("princípios milenares")
console.log(livro.titulo);
