

let nome = document.querySelector('#nome');
let botaoEnviar = document.getElementById('enviar');
let botaoCancelar = document.getElementById('cancelar');
let aviso = document.getElementById('aviso');
let mensagem = document.getElementById('mensagem');

//colocando o foco no nome quando a pagina carregar
nome.focus();

//Exibindo mensagem e deixando o texto em vermelho quando for digitado um numero no nome
nome.addEventListener('keyup', (event) => {
    let encontrou = /\d/.test(nome.value); //expressao regular para verificar se tem numero

    if(encontrou){
        nome.style.color = 'red';
        aviso.style.display = 'initial';
        botaoEnviar.disabled = true;
    } else {
        nome.style.color = 'black';
        aviso.style.display = 'none';
    }
})

//Se o 'aceitar termos' estiver desmarcado nao libera o botao enviar
termos.addEventListener('change', () => {
    if(document.getElementById('termos').checked){
        botaoEnviar.disabled = false;
    } else {
        botaoEnviar.disabled = true;
    }
});

//Quando clico no botao
botaoEnviar.addEventListener('click', (event) => {
    event.preventDefault();

    if(nome.value==""){
        alert("Por favor digite um nome");
    } else {
        console.log(nome.value);

        let nomes = nome.value.split(" "); //separa o nome quando encontrar um espaco e retorna um array
        
        mensagem.innerText = ` Ola ${nome.value.toUpperCase()}, como vai?
        Seu nome tem ${nomes.length} palavras`;
    }
});

botaoCancelar.addEventListener('click', (event) => {
    mensagem.innerText = "";
    botaoEnviar.disabled = true;
});

//Procurar mais expressoes regulares - validar email, validar cpf...

