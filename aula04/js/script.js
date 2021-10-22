
//MESA 6: Isnard Cavalcanti
// Dafne Barbosa
// João Vitor Dutra
// Nayla Ueda
// Lelia Salles
// Pedro Menezes
// Weverton Gois

let titulo = document.querySelector('.titulo'); //selecionando o primeiro elemento que contenha a classe titulo
let divs = document.querySelectorAll('div'); //selecionando todas as divs
let paragrafo = document.getElementById('paragrafo1');//seleciona o elemento com id=paragrafo, seria a mesma coisa que escrever querySelector('#paragrafo1')

let paleta1 = ['blue', 'gray', 'green'];
let paleta2 = ['red', 'yellow', 'brown'];
let paleta3 = ['tomato', 'cornflowerblue', 'khaki'];


let paleta = prompt("Escolha entre 1, 2 e 3 para mudar a paleta de cores");
if (paleta == 1) {
    titulo.style.color = paleta1[0];
    divs.forEach((div, index) => div.style.backgroundColor = paleta1[index]);
    paragrafo.innerText += "\nPALETA1";
    alert("Paleta Fria Horrivel");
}

if (paleta == 2) {
    titulo.style.color = 'black';
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = paleta2[i];
    }
    paragrafo.innerText += "\nPALETA2";
    alert("Paleta Quente pior ainda");
}

if (paleta == 3) {
    titulo.style.color = 'black';
    for (const [index, div] of divs.entries()) {
        div.style.backgroundColor = paleta3[index];
    }
    paragrafo.innerText += "\nPALETA3";
    alert("Paleta Perfeita do Pedro");
}

console.log(document.querySelector("main h1")); //seleciona somente o h1 que estiver dentro da main