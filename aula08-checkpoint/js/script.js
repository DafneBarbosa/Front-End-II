

let botaoEnviar = document.getElementById('enviar');
let luminosidades = document.getElementsByName('luminosidade');

let cards = document.getElementById('plantas');

let cliques = 0;

botaoEnviar.addEventListener('click', (event) => {
    event.preventDefault();

    if(cliques==0){
        let cardExemplo = document.getElementById('exemplo');
        cards.removeChild(cardExemplo);
    }

    let card = document.createElement('div');
    let titulo = document.createElement('h2');
    let paragrafo = document.createElement('p');
    let imagem = document.createElement('img');
    let condicional = document.getElementById('toxica');
    let descricao;
    let infoLuminosidade;
    let infoToxicidade;

    titulo.textContent = document.getElementById('nome').value;
    descricao = document.getElementById('descricao').value;
    card.style.backgroundImage = 'url('+document.getElementById('imagem').value+')';
    document.getElementById('toxica').checked ? infoToxicidade = 'essa planta é tóxica' : infoToxicidade = 'essa planta não é tóxica';

    //imagem.setAttribute('src',document.getElementById('imagem').value);

    for(luminosidade of luminosidades){
        if(luminosidade.checked){
            infoLuminosidade = luminosidade.value;
            break;
        }
    }

    paragrafo.innerText = `Descrição: ${descricao}
    Luminosidade: ${infoLuminosidade} 
    Toxicidade: ${infoToxicidade}`;

    card.appendChild(titulo);
    card.appendChild(paragrafo);
    //card.appendChild(imagem);
    cards.appendChild(card);

    cliques++;
});
