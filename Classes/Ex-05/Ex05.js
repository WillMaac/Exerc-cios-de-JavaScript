/* Crie uma classe Requisicao com:

Um método assíncrono buscarDados(url) que faz uma requisição HTTP usando fetch.*/

class Requisicao {
    async buscarDados(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Erro: ${response.status}`);
            }
            const dados = await response.json();
            return dados;
        } catch (erro) {
            console.error("Erro ao buscar dados:", erro.message);
        }
    }
}

const requisicao = new Requisicao();

requisicao.buscarDados("https://jsonplaceholder.typicode.com/posts/1").then((dados) => {
    console.log(dados);
    // { userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati...", ... }
});
