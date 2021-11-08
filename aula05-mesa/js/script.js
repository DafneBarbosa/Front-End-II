
//innerHTML x innerText
document.querySelector('h1').innerHTML = 'AULA 5 - <i>innerHTML</i>';
document.querySelector('h1').innerText += ' <i>e innerText</i>'


//Alteracoes quando clico
let botao = document.querySelector('button');
let body = document.querySelector('body');
botao.onclick = colorChange;

function colorChange(){
    body.classList.toggle('dark');
    botao.classList.toggle('bd');
}