
//funcoes para manipular atributos de um noh
let a = document.querySelector('a');
console.log(a.hasAttribute('href')); //vendo se a tag a tem o atributo href

a.hasAttribute('href') ? console.log('tem ref: '+a.getAttribute('href')) : console.log('nao tem ref'); //exibindo se tag a tem href e exibindo o link do href

a.setAttribute('href','https://br-playground.digitalhouse.com/login'); //mudando o link da tag a
a.hasAttribute('href') ? console.log('tem ref: '+a.getAttribute('href')) : console.log('nao tem ref');

a.removeAttribute('href'); //removendo href do a
a.hasAttribute('href') ? console.log('tem ref: '+a.getAttribute('href')) : console.log('nao tem ref');

//criando um noh
let paragrafo = document.createElement('p');
paragrafo.innerText = "Novo paragrafo";
paragrafo.style.color = 'blue';

document.body.appendChild(paragrafo) //adicionando o paragrafo no final do body
//obs: document.body == document.querySelector('body');

document.body.removeChild(a);//removendo a tag a dentro do body

//ciando uma lista com ordenacao do tipo 'a'com 3 itens 
let lista = document.createElement('ol');
lista.style.listStyleType = 'lower-latin';
let item1 = document.createElement('li'); //criando primeiro item
item1.innerText = "primeiro item"; //add texto ao item1
lista.appendChild(item1); //add item1 a lista

//add varios elementos a lista
for(let i=1;i<=3;i++){
    let item = document.createElement('li');
    item.innerText = `${i} elemento lista`;
    lista.appendChild(item);
}

document.body.appendChild(lista);

//remover item 2 da lista
let itens = document.querySelectorAll('li');
lista.removeChild(itens[1]);









