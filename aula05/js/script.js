
//innerHTML x innerText
document.querySelector('h1').innerHTML = 'AULA 5 - <i>innerHTML</i>';

document.querySelector('h1').innerText += ' <i>e innerText</i>'

//usando tamplate string
//let novoSubtitulo = prompt("Digite o novo subtitulo");
//let subtitulo = document.querySelector('h2');
//subtitulo.innerText = `Novo subtitulo = ${novoSubtitulo}`;

//style
let body = document.querySelector('body');
body.style.backgroundColor = '#333';
body.style.color = '#FFF';

//alterando muitas propridades css - crio uma nova classe no css e mudo a classe da minha tag
let sub1 = document.querySelector('h2');
sub1.classList.add('dark');

//alterando todos os elementos da lista
let itens = document.querySelectorAll('li');

for(let item of itens){
    item.classList.add('dark');
}

//Alteracoes quando clico
let botao = document.querySelector('button');

body.onclick = colorChange;

function colorChange(){
    body.style.backgroundColor = 'white';
}