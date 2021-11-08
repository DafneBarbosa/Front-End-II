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

const campoEmail = document.createElement('input');
campoEmail.setAttribute('type', 'text');
campoEmail.setAttribute('placeholder', 'E-mail');
campoEmail.setAttribute('disabled', true);
campoEmail.style.padding = '8px';
campoEmail.style.marginBottom = '8px';
campoEmail.removeAttribute('placeholder');

const campoSenha = document.createElement('input');
campoSenha.setAttribute('type', 'password');
campoSenha.setAttribute('placeholder', 'Senha');
campoSenha.style.padding = '8px';
campoSenha.style.marginBottom = '8px';

const botaoEnviar = document.createElement('button');
botaoEnviar.setAttribute('type', 'submit');
botaoEnviar.textContent = 'Enviar';
botaoEnviar.style.backgroundColor = '#28A745';
botaoEnviar.style.marginBottom = '8px';
botaoEnviar.style.padding = '8px';
botaoEnviar.style.cursor = 'pointer';
botaoEnviar.style.transition = '.2s';
botaoEnviar.addEventListener('mouseover', () => (botaoEnviar.style.backgroundColor = '#218838'));
botaoEnviar.addEventListener('mouseout',() => (botaoEnviar.style.backgroundColor = '#28A745'));

const botaoCancelar = document.createElement('button');
botaoCancelar.setAttribute('type', 'reset');
botaoCancelar.textContent = 'Cancelar';
botaoCancelar.style.backgroundColor = '#DC3545';
botaoCancelar.style.padding = '8px';
botaoCancelar.style.cursor = 'pointer';
botaoCancelar.style.transition = '.2s';
botaoCancelar.addEventListener('mouseover', () => (botaoCancelar.style.backgroundColor = '#bd2130'));
botaoCancelar.addEventListener('mouseout', () => (botaoCancelar.style.backgroundColor = '#DC3545'));

formulario.style.maxWidth = '300px';
formulario.style.display = 'flex';
formulario.style.flexDirection = 'column';
document.body.style.backgroundImage = 'url("https://img.wallpapersafari.com/desktop/1440/900/2/57/OA0KBG.jpg")';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundSize = 'cover';

formulario.appendChild(titulo);
formulario.appendChild(campoEmail);
formulario.appendChild(campoSenha);
formulario.appendChild(botaoEnviar);
formulario.appendChild(botaoCancelar);

document.querySelectorAll('button').forEach((item) => {
  item.style.border = 'none';
  item.style.borderRadius = '4px';
});







