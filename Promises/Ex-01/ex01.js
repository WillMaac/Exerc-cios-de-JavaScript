/* Crie uma função chamada esperar(segundos), que retorna uma Promise. Essa Promise deve ser resolvida após o número de segundos informados.

Use a função para exibir "Tempo concluído!" após 3 segundos. */

function esperar(segundos) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Tempo concluído!");
        }, segundos * 1000); // Converte segundos para milissegundos
    });
}

// Usando a Promise
esperar(3).then(mensagem => console.log(mensagem));
// Após 3 segundos, exibe: "Tempo concluído!"
