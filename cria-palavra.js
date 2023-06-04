var nomePalavraEscolhida = '';
var letraDuplicada;
var ListaDeLetrasDuplicadas = [];

var palavraEscolhida = palavraLista[Math.floor(Math.random() * palavraLista.length)];
detectaLetraDuplicada(palavraEscolhida)

for (let index = 0; index < palavraEscolhida.length; index++) {
  nomePalavraEscolhida = nomePalavraEscolhida + palavraEscolhida[index];
  
}


function detectaLetraDuplicada(palavraEscolhida) {
    let frequency = {};
  
    for (let i = 0; i < palavraEscolhida.length; i++) {
      letraDuplicada = palavraEscolhida[i];
  
      if (frequency[letraDuplicada]) {
        ListaDeLetrasDuplicadas.push(letraDuplicada);
      } else {
        frequency[letraDuplicada] = 1;
      }
    }
    letraDuplicada = ''
    return false
  }

  

  