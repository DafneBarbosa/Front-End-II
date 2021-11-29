
let botao = document.querySelector('#botao-xp');
let barraXpProgresso = document.querySelector('#barra-xp-progresso');
let textoLevel = document.querySelector('#level');
let tamanho = 10;
let level = 63;

textoLevel.innerHTML = `Lv ${level}`
barraXpProgresso.style.width = tamanho + "%";

botao.addEventListener('click', (event) => {
    if(tamanho<90){
        tamanho += 10;
        barraXpProgresso.style.width = tamanho + "%";
    } else {
        tamanho = 0;
        barraXpProgresso.style.width = tamanho + "%";
        level++;
        textoLevel.innerHTML = `Lv ${level}`
    }
})