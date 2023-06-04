palavras = document.querySelectorAll('.linha-palavra');
letraslinha = palavras[indiceLinha].querySelectorAll('input');
var letraCorrespondente;
var ListaDeLetrasDuplicadasNoInput = [];
var letrasUsadas = [];
var letraDuplicadaInput;
var z = 0
var acertos = 0;
var deuVerde = false ;
var deuAmarelo = false;
var letraQuePodeSerVermelha;
var letraRepetidaQuePodeSerVermelha;
var letrasEncontras = 0;
var rodadasPraFinal = 5;
var letrasQueDeramVerde = [];
var letrasQueDeramAmarelo = [];


function verificaLetra (){
    if (erros == 0) {
        detectaRepNoInput(letraslinha)
    for (let index = 0; index < letraslinha.length; index++) {
        var letra = letraslinha[index].value;
        var letraInput = letraslinha[index];
        letrasUsadas.push(letra);
        comparaLetras (letra, letraInput);
        corTeclado (letra);
        defineVitoria ();
        
        
     }
     defineDerrota ()
     if(deuVerde) {
        letraQuePodeSerVermelha.classList.remove('letra-existe');
        letraQuePodeSerVermelha.classList.add('letra-errada');
     }
     letrasUsadas = [];
     z = 0;
     acertos = 0;
     letraDuplicadaInput = ''
     deuVerde = false ;
     deuAmarelo = false;
     rodadasPraFinal = rodadasPraFinal - 1;
     ListaDeLetrasDuplicadasNoInput = [];
     letrasEncontras = 0
     letrasQueDeramVerde = [];
     letrasQueDeramAmarelo = [];

}}

function comparaLetras (letra, letraInput) {
        letraCorrespondente = palavraEscolhida[z];
        
    // Verifica se a palavra secreta tem letras repetidas
       if(ListaDeLetrasDuplicadas.length == 0 ){

         // Verifica se no input tem letras repetidas e dá um valor para cada condição
        if (ListaDeLetrasDuplicadasNoInput.includes(letra)) {
            if (deuVerde && letrasQueDeramVerde.includes(letra)) {
                letraInput.classList.add('letra-errada');
                
            } if (ListaDeLetrasDuplicadasNoInput.includes(letra) && letra == letraCorrespondente) {
                letraInput.classList.add('letra-certa');
                letrasQueDeramVerde.push(letra);
                deuVerde = true;
            } else {
                if (deuAmarelo && letrasQueDeramAmarelo.includes(letra)) {
                    letraInput.classList.add('letra-errada');
                } else {
                    if(palavraEscolhida.includes(letra)){
                    letraInput.classList.add('letra-existe');
                    letraQuePodeSerVermelha = letraInput ;
                    letrasQueDeramAmarelo.push(letra);
                    deuAmarelo = true;
                    } else {
                    letraInput.classList.add('letra-errada');
                    }
                }
            }
        } else {
            estabeleCor (palavraEscolhida, letra, letraCorrespondente, letraInput);
        }

        // Se a palavra secreta tem letras repetidas, esses passos se aplicam
        } else {
            if(ListaDeLetrasDuplicadas.includes(letra)) {
                if (letrasEncontras == 2) {
                    if (letra == letraCorrespondente) {
                        letraInput.classList.add('letra-certa');
                        letraRepetidaQuePodeSerVermelha.classList.remove('letra-existe');
                        letraRepetidaQuePodeSerVermelha.classList.add('letra-errada');
                    } else {
                    letraInput.classList.add('letra-errada');
                    return
                    }
                }
                
                if (letra == letraCorrespondente) {
                    letraInput.classList.add('letra-certa');
                    letrasQueDeramVerde.push(letra);
                    acertos = acertos + 1 
                    letrasEncontras = letrasEncontras + 1
                } else {
                    letraInput.classList.add('letra-existe');
                    
                    letraRepetidaQuePodeSerVermelha = letraInput
                    letrasEncontras = letrasEncontras + 1
                }
            } else {
                // Verifica se no input tem letras repetidas e dá um valor para cada condição
                if (ListaDeLetrasDuplicadasNoInput.includes(letra)) {
                    if (deuVerde && letrasQueDeramVerde.includes(letra)) {
                        letraInput.classList.add('letra-errada');
                        
                    } if (ListaDeLetrasDuplicadasNoInput.includes(letra) && letra == letraCorrespondente) {
                        letraInput.classList.add('letra-certa');
                        letrasQueDeramVerde.push(letra);
                        deuVerde = true;
                    } else {
                        if (deuAmarelo && letrasQueDeramAmarelo.includes(letra)) {
                            letraInput.classList.add('letra-errada');
                        } else {
                            if(palavraEscolhida.includes(letra)){
                            letraInput.classList.add('letra-existe');
                            letraQuePodeSerVermelha = letraInput ;
                            letrasQueDeramAmarelo.push(letra);
                            deuAmarelo = true;
                            } else {
                            letraInput.classList.add('letra-errada');
                            }
                        }
                    }
                } else {
                    estabeleCor (palavraEscolhida, letra, letraCorrespondente, letraInput);
                }
            }
            
        }
             z = z + 1;
    }


function detectaRepNoInput(letraslinha) {
    let frequency = {};
  
    for (let i = 0; i < letraslinha.length; i++) {
      letraDuplicadaInput = letraslinha[i].value;
  
      if (frequency[letraDuplicadaInput]) {
        ListaDeLetrasDuplicadasNoInput.push(letraDuplicadaInput);
      } else {
        frequency[letraDuplicadaInput] = 1;
      }
    }
    letraDuplicadaInput = '';
    return false;
  }


  function estabeleCor (palavraEscolhida, letra, letraCorrespondente, letraInput) {

    if (palavraEscolhida.includes(letra)) {
           
        if (letraCorrespondente == letra) {
            
            acertos = acertos + 1 
            letraInput.classList.add('letra-certa');
            if (letra == letraDuplicadaInput) {
            }
        }else { 
            letraInput.classList.add('letra-existe');
        }
    } else  {
        letraInput.classList.add('letra-errada');
    }
  }