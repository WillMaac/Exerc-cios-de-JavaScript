/* Crie uma classe Calculadora com:

Um método estático somar(a, b) que retorna a soma de dois números.
Um método estático subtrair(a, b) que retorna a subtração de dois números.
Um método estático multiplicar(a, b) que retorna a multiplicação de dois números. */

class Calculadora{

    static somar(a,b){
        return a+ b;
    };

    static subtrair(a, b){
        return a- b
    };

    static multiplicar(a, b){
        return a * b;
    }

}



console.log(Calculadora.somar(10, 10));
console.log(Calculadora.subtrair(50, 20));
console.log(Calculadora.multiplicar(10, 10));

