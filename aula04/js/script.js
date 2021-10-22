
let titulo = document.querySelector('.titulo'); //selecionando o primeiro elemento que contenha a classe titulo
let divs = document.querySelectorAll('div'); //selecionando todas as divs
let paragrafo = document.getElementById('paragrafo1');//seleciona o elemento com id=paragrafo, seria a mesma coisa que escrever querySelector('#paragrafo1')
alert("AULA 04 - "+paragrafo.innerText); //exibindo somente o texto que esta dentro do id paragrafo1

let paleta = prompt("Escolha entre 1 e 2 para mudar a paleta de cores");

if(paleta==1){        
    titulo.style.color = 'blue';
    divs.forEach(div => div.style.backgroundColor = 'black');
    paragrafo.innerText = "PALETA1";
} 

if(paleta==2){        
    titulo.style.color = 'black';
    divs.forEach(div => div.style.backgroundColor = 'green');
    paragrafo.innerText = "PALETA2";
} 

console.log(document.querySelector("main h1")); //seleciona somente o h1 que estiver dentro da main