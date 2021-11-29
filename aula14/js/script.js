
let nome = document.querySelector('#nome');
let btn = document.querySelector('#btn');
let ol = document.querySelector('ol');


//fetch('https://fakestoreapi.com/products/')
//.then( resposta => resposta.jason())
//.then( respostaJson => console.log(respostaJson))

btn.addEventListener('click', buscarDados);

async function buscarDados(event){
    event.preventDefault();

    let url = 'https://fakestoreapi.com/products/';

    let response = await fetch(url);
    let arrayProdutos = await response.json()
    console.log(arrayProdutos);

    arrayProdutos.map((element) => {
        ol.innerHTML += `<li>Produto: ${element.title} <br> Preço: $ ${element.price}</li>`
    })
}