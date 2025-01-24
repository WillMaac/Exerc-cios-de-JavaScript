/* Crie uma função buscarUsuario(id), que retorna uma Promise e simula uma requisição para obter um usuário pelo id.

A função deve:

Demorar 2 segundos para responder.
Se o id for maior que 0, a Promise deve ser resolvida com um objeto { id, nome }.
Se o id for inválido (0 ou negativo), a Promise deve ser rejeitada com a mensagem "ID inválido".*/

function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id, nome: "Gustavo" });
            } else {
                reject("ID inválido");
            }
        }, 2000);
    });
}

// Testando com ID válido
buscarUsuario(0)
    .then(usuario => console.log("Usuário encontrado:", usuario))
    .catch(erro => console.log("Erro:", erro));