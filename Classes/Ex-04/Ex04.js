/* Simule uma classe abstrata Forma:

Implemente um método calcularArea() que deve ser sobrescrito nas subclasses.
Crie as classes Quadrado e Circulo, que herdam de Forma:

Quadrado deve ter uma propriedade lado e calcular a área como lado * lado.
Circulo deve ter uma propriedade raio e calcular a área como Math.PI * raio * raio. */


class Forma {
    calcularArea() {
        throw new Error("O método calcularArea() deve ser implementado.");
    }
}

class Quadrado extends Forma {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        return this.lado * this.lado;
    }
}

class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
}

const quadrado = new Quadrado(4);
console.log(quadrado.calcularArea()); // 16

const circulo = new Circulo(3);
console.log(circulo.calcularArea()); // 28.274333882308138
