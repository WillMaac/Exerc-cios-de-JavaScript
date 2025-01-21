/* Crie uma classe Animal com:

Uma propriedade nome inicializada no construtor.
Um método emitirSom() que imprime "O animal está fazendo um som".
Depois, crie uma classe Cachorro que herda de Animal:

Substitua o método emitirSom() para imprimir "O cachorro está latindo".
Teste as classes criando uma instância de Cachorro e chamando o método emitirSom(). */

class Animal{
    constructor(nome){
        this.nome = nome;
    }

    emitirSom(){
        console.log(`O ${this.nome} está fazendo um som`);
        
    }
}

const a1 = new Animal("Cachorro")

a1.emitirSom();
