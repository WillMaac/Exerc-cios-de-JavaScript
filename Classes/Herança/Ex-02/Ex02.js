/* Crie uma hierarquia de classes para representar um sistema de funcionários:

Crie uma classe Funcionario com as propriedades nome e salario (inicializadas no construtor).
Adicione o método exibirDados() na classe Funcionario, que imprime o nome e o salário.
Crie duas subclasses:
Gerente: tem um método sobrescrito exibirDados() que adiciona "Cargo: Gerente".
Desenvolvedor: tem um método sobrescrito exibirDados() que adiciona "Cargo: Desenvolvedor".
Use o método da superclasse (super) para aproveitar a exibição básica de dados antes de adicionar o cargo. */

class Funcionarios{
    constructor(nome, salario){
     this.nome = nome
     this.salario = salario;
    }

    exibirDados(){
        console.log(`Nome: ${this.nome}, Salário: R$${this.salario}`);
    }
}

class Gerente extends Funcionarios{
    exibirDados(){
        super.exibirDados()
        console.log("Cargo: Gerente");
    }

}

class Desenvolvedor extends Funcionarios{
    exibirDados(){
        super.exibirDados()
        console.log("Cargo: Desenvolvedor");
    }
    }

const g1 = new Gerente("Otavia", 8000)
g1.exibirDados();

const d1 = new Desenvolvedor("Will", 10000,)
d1.exibirDados();

