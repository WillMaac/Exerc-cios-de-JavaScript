function buscarPost(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao buscar o post");
            }
            return response.json();
        })
        .then(post => console.log("Título do post:", post.title))
        .catch(erro => console.log("Erro:", erro.message));
}


buscarPost(101);

//Acima de 100 da erro ao buscar o post
