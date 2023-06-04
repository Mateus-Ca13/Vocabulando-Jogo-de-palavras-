var botaoEnviar = document.querySelector('.enviar-palavra');
var palavras = document.querySelectorAll('.linha-palavra');
var indiceLinha = 0;
var letraslinha;
var erros = 0;
var nomePalavraEnviada = ''

validaLinha();

 botaoEnviar.addEventListener('click', function () {
    enviaPalavra (palavras);
    verificaLetra ();
    testaErros ()

 });

 document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      enviaPalavra (palavras);
      verificaLetra ();
      testaErros ()
    }}
  );

function enviaPalavra (palavras){
  if (indiceLinha < palavras.length) {
        letraslinha = palavras[indiceLinha].querySelectorAll('input');

    for (let index = 0; index < letraslinha.length; index++) {
        var letra = letraslinha[index];
        nomePalavraEnviada = nomePalavraEnviada + letra.value;
        if (letra.value == '') {
        erros = erros + 1;
        avisoErro ('Finalize a palavra!');
        }}
    if (erros ==0) {
      if (palavrasExistentes.includes(nomePalavraEnviada)) {
        nomePalavraEnviada = ''
        return
      } else {
        avisoErro ('Essa palavra não existe!')
        erros = erros + 1;
        nomePalavraEnviada = ''
      }}
}
}

function testaErros () {
  if (erros == 0)  {
    for (let index = 0; index < letraslinha.length; index++) {
      var letra = letraslinha[index];
    letra.disabled = true;
    erros = 0; }
    indiceLinha = indiceLinha + 1;
    validaLinha()
    } else {
      erros = 0; 
    }
}

function validaLinha() {
  letraslinha = palavras[indiceLinha].querySelectorAll('input');
  for (let index = 0; index < letraslinha.length; index++) {
    var letra = letraslinha[index];
    letra.disabled = false;
    
}

letraslinha[0].focus();
}
