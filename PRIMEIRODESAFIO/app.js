let amigos = [];   // lista contendo nomes adicionados 
let sorteados = []; // lista de nomes já sorteados 

function adicionarAmigoSecreto() {
    let adicionarAmigo = document.querySelector('.input-name').value;
    console.log(adicionarAmigo);

    if (adicionarAmigo === "" || typeof adicionarAmigo !== 'string') {
        alert('Por favor, digite um nome válido');
    } else {
        amigos.push(adicionarAmigo);
        document.querySelector('.input-name').value = ''; // Limpa o campo de texto
        adicionarAmigosNaLista(); // Atualiza a lista de amigos
    }
}

function adicionarAmigosNaLista() {
    let lista = document.querySelector('#listaAmigos'); // Substitua '#idDaLista' pelo ID correto da sua lista
    lista.innerHTML = ''; // Limpa a lista antes de adicionar novos elementos

    for(let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i]; // Usa o array amigos diretamente
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Verifica se o array 'amigos' está vazio
    if (amigos.length === 0) {
        // Se estiver vazio, exibe uma mensagem no console
        console.log('Não há amigos para sortear');
        // Retorna da função para evitar continuar o processo de sorteio
        return;
    }

    // Gera um índice aleatório entre 0 e o tamanho do array 'amigos' (exclusivo)
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Seleciona o amigo correspondente ao índice aleatório gerado
    let amigoSelecionado = amigos[indiceAleatorio];
    
    // Exibe o nome do amigo selecionado no console
    console.log("Amigo selecionado:", amigoSelecionado);
    
    // (Opcional) Exibe o amigo selecionado em um elemento HTML com o ID 'resultado'
    document.querySelector('#resultado').textContent = `Amigo selecionado: ${amigoSelecionado}`;
}

// Enquanto o número de nomes sorteados for menor que o total de nomes
while (sorteados.length < amigos.length) {
    // Gera um índice aleatório baseado no tamanho da lista de nomes
    let indice = Math.floor(Math.random() * amigos.length);
    // Seleciona o nome correspondente ao índice sorteado
    let nomeSorteado = amigos[indice];

    // Verifica se o nome já foi sorteado
    if (!sorteados.includes(nomeSorteado)) {
        // Se não foi sorteado, adiciona à lista de sorteados
        sorteados.push(nomeSorteado);
        // Exibe o nome sorteado no console
        console.log(nomeSorteado);
    }
}

