/* Crie uma classe ContaBancaria com:

Uma propriedade privada _saldo.
Um getter para acessar o saldo.
Métodos para depositar(valor) e sacar(valor). */

class ContaBancaria {
  #saldo;
  constructor(saldo) {
    this.#saldo = 0;
  }
  get saldo() {
    return this.#saldo;
  }

  depositar(valor) {
    if (valor >= 0) {
      this.#saldo += valor;
    } else {
      console.log("O saldo não pode ser negativo.");
    }
  }

  sacar(valor) {
    if (valor >= 0 && valor <= this.#saldo) {
      this.#saldo -= valor;
    } else {
      console.log("Saldo insuficiente ou valor inválido.");
    }
  }
}

const conta = new ContaBancaria();
conta.depositar(1000);
conta.sacar(100);

console.log(conta.saldo);
