
// Refatorar o código, utilizando funções e a estrutura de decisão switch;
// Implementar uma regra de que só é declarado o ganhador do jogo após 3 rodadas, para auxiliar use uma variável para armazenar o vencedor de cada partida;
// Comentar o código e utilizar de qualquer outro recurso para deixá-lo melhor formatado.

//MESA: Arnaldo Ramos, Marcelo Ramos, Nayla Ueda, Israel Almeida, Dafne Barbosa e Matheus Braga Dias.

let novo = true;

while(novo){
    
    //Inicializando os pontos
    let pontosJogador = 0;
    let pontosPc = 0;
    
    //Fazendo as 3 rodadas do jogo
    for(let rodada=0; rodada<3; rodada++){

        //Recebendo a escolha do usuario
        let jogador = parseInt(prompt("RODADA "+(rodada+1)+"\nEscolha entre: Pedra(1), Papel(2) ou Tesoura(3): "));

        //Randomizando a escolha do PC
        let pc = parseInt(Math.random()*3+1); //randomico entre 1 e 3
        alert("Escolha do computador: "+pc)

        //Chamando a funcao para jogar
        jogo(jogador,pc);

        //Funcao do jogo
        function jogo(jogador,pc){
            switch(jogador){
                case 1:
                    switch(pc){
                        case 2: pontosPc++; break;
                        case 3: pontosJogador++; break;
                        default: break;
                    }
                    break;
                case 2:
                    switch(pc){
                        case 1: pontosJogador++; break;
                        case 3: pontosPc++; break;
                        default: break;
                    }
                    break;
                case 3:
                    switch(pc){
                        case 1: pontosPc++; break;
                        case 2: pontosJogador++; break;
                        default: break;
                    }
                    break;
                default:
                    alert("ERRO!\nCaracter nao encontrado!\nDigite comente 1, 2 ou 3!");
                    break;
            }
        }  
    }

    //Definindo o ganhador 
    if(pontosJogador>pontosPc) alert(`PARABENS voce ganhou!! \nPontuacao:   Jogador ${pontosJogador}  x  Computador ${pontosPc}`);
    else if(pontosJogador==pontosPc) alert(`EMPATE \nPontuacao:   Jogador ${pontosJogador}  x  Computador ${pontosPc}`);
    else alert(`PERDEU \nPontuacao:   Jogador ${pontosJogador}  x  Computador ${pontosPc}`);

    //Definindo se o jogador quer jogar novamente
    novo = confirm("Deseja jogar novamente?")
}
