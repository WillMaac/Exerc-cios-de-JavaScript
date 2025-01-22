/* Crie uma classe Pessoa com:

Uma propriedade privada _anoNascimento.
Um getter idade que calcula a idade com base no ano atual.*/

class Pessoa {
    constructor(anoNascimento){
this._anoNascimento = anoNascimento;
    }

    get idade(){
        const anoAtual = new Date().getFullYear();
return anoAtual - this._anoNascimento;
    }
    }

    const pessoa = new Pessoa(1998);
    console.log(pessoa.idade);
    