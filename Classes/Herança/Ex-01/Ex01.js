/* Crie uma hierarquia de classes para representar um sistema de transporte:

Crie uma classe Veiculo com as propriedades marca e modelo (inicializadas no construtor) e o método detalhes() que exibe a marca e o modelo.
Crie duas subclasses:
Carro: adicione a propriedade numeroPortas. Sobrescreva o método detalhes() para incluir o número de portas.
Moto: adicione a propriedade temCarroLateral (boolean). Sobrescreva o método detalhes() para incluir se a moto tem ou não carro lateral.
Utilize o método da superclasse (super) nas subclasses para exibir os detalhes básicos do veículo antes de adicionar as informações específicas.*/

class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    detalhes() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, numeroPortas) {
        super(marca, modelo); // Chama o construtor da classe pai
        this.numeroPortas = numeroPortas;
    }

    detalhes() {
        super.detalhes(); // Chama o método da classe pai
        console.log(`Número de portas: ${this.numeroPortas}`);
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, temCarroLateral) {
        super(marca, modelo); // Chama o construtor da classe pai
        this.temCarroLateral = temCarroLateral;
    }

    detalhes() {
        super.detalhes(); // Chama o método da classe pai
        console.log(
            `Tem carro lateral: ${this.temCarroLateral ? "Sim" : "Não"}`
        );
    }
}

// Testando
const carro = new Carro("Toyota", "Corolla", 4);
carro.detalhes();
// Marca: Toyota, Modelo: Corolla
// Número de portas: 4

const moto = new Moto("Honda", "CB500", true);
moto.detalhes();
// Marca: Honda, Modelo: CB500
// Tem carro lateral: Sim
