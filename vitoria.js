var abaTermino = document.querySelector('.aviso-termino');
var avisoTermino = document.querySelector('h3');
var fundo = document.querySelector('.fundo');
var botaoReinicio = document.querySelector('.botao-reiniciar');
var botaoCancelar = document.querySelector('.botao-parar');

function defineVitoria () {
    if (acertos == 5) {
    abaTermino.classList.toggle('termino-ativo');
    fundo.classList.toggle('fundo-ativo');
    rodadasPraFinal = 6;
    }
};

function defineDerrota () {
   if (rodadasPraFinal == 0){
    avisoTermino.innerHTML = 'Você perdeu, a palavra era: ' +nomePalavraEscolhida.toLocaleUpperCase();
    abaTermino.classList.toggle('termino-ativo');
    fundo.classList.toggle('fundo-ativo');
    }
};



botaoReinicio.addEventListener('click', function () {
    location.reload();
});

botaoCancelar.addEventListener('click', function () {
    abaTermino.classList.toggle('termino-ativo');
    fundo.classList.toggle('fundo-ativo');
});

