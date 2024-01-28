let listaDeNumerosSorteados = [];
let limiteMaximo = 10;
let numeroSecreto = gerarNunmeroAleatorio();
let tentativas = 1;
/*CÓDIGO ANTIGO

let titulo = document.querySelector('h1');
titulo.innerHTML= 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';*/


function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, `Brazilian Portuguese Female`, {rate:1.2});
}

mensagemInicial();

function mensagemInicial(){
    exibirNaTela(`h1`,`Jogo do número secreto`);
    exibirNaTela(`p`, `Escolha um número entre 1 e ${limiteMaximo}`);
}

function verificarChute(){
    let chute = document.querySelector(`input`).value;
    //console.log(chute == numeroSecreto);


    if (chute == numeroSecreto){

        exibirNaTela(`h1`, `Acertou!`);
        let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
        let mensagemTentativas = `Parabéns você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirNaTela(`p`, mensagemTentativas);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    }else{
        if (chute > numeroSecreto){
            exibirNaTela(`p`, `O número secreto é menor!`);
        }else{
            exibirNaTela(`p`, `O número secreto é maior!`)
        } 
        tentativas++;
        limparCampo();
    }
}

function gerarNunmeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * limiteMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == limiteMaximo){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNunmeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector(`input`);
    chute.value = ``;
}

function reiniciarJogo(){
    numeroSecreto = gerarNunmeroAleatorio();
    tentativas = 1;
    limparCampo();
    mensagemInicial();
    document.getElementById(`reiniciar`).setAttribute(`disabled`,true);
}