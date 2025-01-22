/* Crie uma classe Produto com:

Uma propriedade privada _preco.
Um setter que impede que o preço seja negativo.  */

class Produto{
    constructor(preco){
        this._preco = preco;
    }

    get preco(){
        return this._preco;
    }
    set preco(novoPreco){
        if(novoPreco >= 0){
            this._preco = novoPreco;
        }else{
            console.log("O preço não pode ser negativo.");
            
        }
    }
}

const pro1 = new Produto(100);
console.log(pro1.preco);

pro1.preco = -10;
    console.log(pro1.preco);

