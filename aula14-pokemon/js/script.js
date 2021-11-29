//Pegando a div onde todos os cards pokemons vao ficar
let divPokemons = document.querySelector('.pokemons');

//Fazendo array dos botoes de tipos e geracoes
let botoesGeracao = document.querySelectorAll('.geracao');
let botoesTipos = document.querySelectorAll('.tipo');
let botoesTipos2 = document.querySelectorAll('.tipo2');
let botoesGeracaoMarcados = [];
let botoesTiposMarcados = [];

//Inicializando variaveis 
let inicio = 1;
let quantidade = 1;
let boolean = 2;
let botaotipo2 = "";

//Quando botao tipo 2 for selecionado
botoesTipos2.forEach((botao) => {
  botao.addEventListener('click', (event) => {
    novoClique(event);
    botaotipo2 = botao.value;
    console.log(botaotipo2);
    filtrarTipos();
  })
})

//Quando algum botao de geracao for clicado
botoesGeracao.forEach((botao) => {
  botao.addEventListener('click', (event) => {
    novoClique(event);
    trocaIdBotao(botao);
    botoesGeracaoMarcados = document.querySelectorAll('#checked');
    filtraGeracoes();
  })
})

function filtraGeracoes() {
  botoesGeracaoMarcados.forEach((botao) => {
    defineGeracoes(botao.value);
    let urlLista = `https://pokeapi.co/api/v2/pokemon?offset=${inicio}&limit=${quantidade}`;
    fetch(urlLista).then(resposta => resposta.json()).then(resposta => {
      resposta.results.forEach(pokemon => {
        garantePosicao(pokemon, botaotipo2);
      })
    })
  })
}

//Quando algum botao de tipo for clicado
botoesTipos.forEach((botao) => {
  botao.addEventListener('click', (event) => {
    novoClique(event);
    trocaNameBotao(botao);
    botoesTiposMarcados = document.querySelectorAll('input[name="checked"]');
    if(botoesTiposMarcados.length==0){botoesTipos2.forEach(botao => botao.toggleAttribute('disabled'))}
    else{botoesTipos2.forEach(botao => botao.removeAttribute('disabled'))};
    filtrarTipos();
  })
})

function filtrarTipos(){
  if (botoesGeracaoMarcados.length == 0) {
      botoesTiposMarcados.forEach((botao) => {
        let urlTipos = `https://pokeapi.co/api/v2/type/`;
        fetch(urlTipos).then(resposta => resposta.json()).then(resposta => {
          resposta.results.forEach(tipo => {
            comparaTipos(tipo, botao.value);
          })
        })
      })
    } else { filtraGeracoes(); }
}

//Prevenindo default e limpando a tela
function novoClique(event) {
  event.preventDefault();
  divPokemons.innerHTML = "";
}

function trocaIdBotao(botao) {
  botao.getAttribute('id') == 'checked' ? botao.setAttribute('id', 'unchecked') : botao.setAttribute('id', 'checked');
}

function trocaNameBotao(botao) {
  botao.getAttribute('name') == 'checked' ? botao.setAttribute('name', 'unchecked') : botao.setAttribute('name', 'checked');
}

//Define pokemons de cada geracao
function defineGeracoes(numero) {
  switch (numero) {
    case '1': { inicio = 0; quantidade = 151; break; }
    case '2': { inicio = 151; quantidade = 100; break; }
    case '3': { inicio = 251; quantidade = 135; break; }
    case '4': { inicio = 386; quantidade = 107; break; }
    case '5': { inicio = 493; quantidade = 156; break; }
    case '6': { inicio = 649; quantidade = 72; break; }
    case '7': { inicio = 721; quantidade = 88; break; }
    case '8': { inicio = 809; quantidade = 89; break; }
    default: { inicio = 0; quantidade = 0; break; }
  }
}

//Compara tipo dos pokemons com tipo do botao
function comparaTipos(tipo, tipoBotao) {
  if (tipo.name == tipoBotao) {
    fetch(tipo.url).then(resposta => resposta.json()).then(resposta => {
      resposta.pokemon.forEach(pokemon => {
        garantePosicao(pokemon.pokemon, botaotipo2)
      })
    })
  }
}

//Garante posicao na lista de pokemons
async function garantePosicao(pokemon, tipo2) {
  let card = document.createElement('div');
  card.setAttribute('class', 'card');
  divPokemons.appendChild(card);

  let response = await fetch(pokemon.url);
  let poke = await response.json();

  filtraTipos(await poke, tipo2);

  if (boolean == 1) {
    exibePokemon(pokemon.url, card);
  }
}

//Monta o card dos pokemons
async function exibePokemon(urlPokemon, card) {
  let response = await fetch(urlPokemon)
  let pokemon = await response.json();

  if (pokemon.id < 899) {
    let tipo2 = "";
    if (pokemon.types.length > 1) {
      tipo2 = pokemon.types[1].type.name;
    }

    card.innerHTML += `
      <p>${pokemon.id}</p>
      <img src="${pokemon.sprites["front_default"]}"></img>
      <h3>${pokemon.name.toUpperCase()}</h3>
      <div>
        <p id="${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</p>
        <p id="${tipo2}">${tipo2}</p>
      </div>`
  }

}

function filtraTipos(pokemon, tipo2) {


  if (tipo2 != "") {
    
    for (let i = 0; i < botoesTiposMarcados.length; i++) {
      if (botoesTiposMarcados[i].value == pokemon.types[0].type.name && pokemon.types[1].type.name == tipo2) {
        boolean = 1;
        return;
      }
      if (botoesTiposMarcados[i].value == pokemon.types[1].type.name && pokemon.types[0].type.name == tipo2) {
        boolean = 1;
        return;
      }
      boolean = 2;
    }

  } else {


    if (botoesTiposMarcados.length > 0) {
      for (let i = 0; i < botoesTiposMarcados.length; i++) {
        if (botoesTiposMarcados[i].value == pokemon.types[0].type.name) {
          boolean = 1;
          return;
        }
        if (pokemon.types.length > 1 && botoesTiposMarcados[i].value == pokemon.types[1].type.name) {
          boolean = 1;
          return;
        }
        boolean = 2;
      }
    } else { boolean = 1; }
  }
}











