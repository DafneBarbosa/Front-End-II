
const formulario = document.createElement('form');
document.body.appendChild(formulario);
document.body.style.backgroudColor = '#f2f2f2';
document.body.style.fontFamily = 'sans-serif';
document.body.style.display = 'grid';
document.body.style.height = '80vh';
document.body.style.placeContent = 'center';

const titulo = document.createElement('h1');
titulo.textContent = 'Formulário';
titulo.style.textAlign = 'center';
titulo.addEventListener('mouseover', () => titulo.style.color = '#218838');
titulo.addEventListener('mouseout', () => titulo.style.color = 'black');

const numero1 = document.createElement('input');
numero1.setAttribute('type', 'text');
numero1.setAttribute('placeholder', 'Digite um numero qualquer');
numero1.style.padding = '8px';
numero1.style.marginBottom = '8px';
numero1.addEventListener('keyup',(event)=>{
    paragrafo2.innerText += event.key;
    paragrafo6.textContent = parseInt(paragrafo2.innerText) + parseInt(paragrafo4.innerText);
})

const numero2 = document.createElement('input'); 
numero2.setAttribute('type', 'text'); 
numero2.setAttribute('placeholder', 'Digite outro numero qualquer'); 
numero2.style.padding = '8px'; 
numero2.style.marginBottom = '8px';
numero2.addEventListener('keyup',(event)=>{
    paragrafo4.innerText += event.key;
    paragrafo6.textContent = parseInt(paragrafo2.innerText) + parseInt(paragrafo4.innerText);
})

const botaoEnviar = document.createElement('button');
botaoEnviar.setAttribute('type', 'submit');
botaoEnviar.textContent = 'Enviar';
botaoEnviar.style.backgroundColor = '#28A745';
botaoEnviar.style.marginBottom = '8px';
botaoEnviar.style.padding = '8px';
botaoEnviar.style.cursor = 'pointer';
botaoEnviar.style.transition = '.2s';
botaoEnviar.addEventListener('mouseover', () => (botaoEnviar.style.backgroundColor = '#218838'));
botaoEnviar.addEventListener('mouseout', () => (botaoEnviar.style.backgroundColor = '#28A745'));
botaoEnviar.addEventListener('click', (event) => event.preventDefault());

const botaoCancelar = document.createElement('button');
botaoCancelar.setAttribute('type', 'reset');
botaoCancelar.textContent = 'Cancelar';
botaoCancelar.style.backgroundColor = '#DC3545';
botaoCancelar.style.padding = '8px';
botaoCancelar.style.cursor = 'pointer';
botaoCancelar.style.transition = '.2s';
botaoCancelar.addEventListener('mouseover', () => (botaoCancelar.style.backgroundColor = '#bd2130'));
botaoCancelar.addEventListener('mouseout', () => (botaoCancelar.style.backgroundColor = '#DC3545'));

const paragrafo1 = document.createElement('p');
paragrafo1.textContent = 'Soma:    ';
paragrafo1.style.padding = '8px';
const paragrafo2 = document.createElement('p');
paragrafo2.style.padding = '8px';
const paragrafo3 = document.createElement('p');
paragrafo3.textContent = '+';
paragrafo3.style.padding = '8px';
const paragrafo4 = document.createElement('p');
paragrafo4.style.padding = '8px';
const paragrafo5 = document.createElement('p');
paragrafo5.textContent = '=';
paragrafo5.style.padding = '8px';
const paragrafo6 = document.createElement('p');
paragrafo6.textContent = parseInt(paragrafo2.innerText) + parseInt(paragrafo4.innerText);
paragrafo6.style.padding = '8px';

const div = document.createElement('div');
div.appendChild(paragrafo1);
div.appendChild(paragrafo2);
div.appendChild(paragrafo3);
div.appendChild(paragrafo4);
div.appendChild(paragrafo5);
div.appendChild(paragrafo6);
div.style.display = 'flex';
div.style.flexDirection = 'row';


formulario.style.maxWidth = '300px';
formulario.style.display = 'flex';
formulario.style.flexDirection = 'column';
//document.body.style.backgroundImage = 'url("https://img.wallpapersafari.com/desktop/1440/900/2/57/OA0KBG.jpg")';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundSize = 'cover';

formulario.appendChild(titulo);
formulario.appendChild(numero1);
formulario.appendChild(numero2);
formulario.appendChild(botaoEnviar);
formulario.appendChild(botaoCancelar);
formulario.appendChild(div);


document.querySelectorAll('button').forEach((item) => {
    item.style.border = 'none';
    item.style.borderRadius = '4px';
});









