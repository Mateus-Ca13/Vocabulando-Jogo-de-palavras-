var letrasTeclado = document.querySelectorAll('.tecla');
var inputEmFoco;
var teclaApagar = document.querySelector('.tecla-backspace');

function corTeclado (letra) {
    for (let index = 0; index < letrasTeclado.length; index++) {
        var letraTeclado = letrasTeclado[index];

        if (letra == letraTeclado.textContent) {
            if (palavraEscolhida.includes(letra)) {
                if (letra == letraCorrespondente) {
                    letraTeclado.classList.add('tecla-certa')
                    
                }
                else {
                    letraTeclado.classList.add('tecla-existe')
                }

            }else {
                letraTeclado.classList.add('tecla-faltante')
            }
        }
        
    }
}

for (let index = 0; index < letrasTeclado.length; index++) {
    SelecionaTecla (letrasTeclado[index]); 
}



function selecionaInputEmFoco (input) {

    input.addEventListener('focus', function () {

        inputEmFoco = this;
        this.blur();
        inputEmFoco.classList.add('input-ativado');
        

        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            if (input == inputEmFoco) {

            } else {
                input.classList.remove('input-ativado');
            }
            
        }

        
        
    })}



function SelecionaTecla (tecla) {

    tecla.addEventListener('click', function (event) {
        if (tecla == teclaApagar) {
            retornaLetraVirtual (inputEmFoco)
        } else {
        var teclaSelecionada = event.target.textContent;
        inputEmFoco.value = teclaSelecionada;
        avancaLetraVirtual (inputEmFoco);
        }
    
    })} 

    function avancaLetraVirtual (inputEmFoco) {

                inputEmFoco = inputEmFoco.nextElementSibling;
                inputEmFoco.focus();
      
        };

        function retornaLetraVirtual (inputEmFoco) {
                    if (inputEmFoco.value == '') {
                        var anterior = inputEmFoco.previousElementSibling;
                        event.preventDefault();
                        if (anterior) {
                            anterior.focus();
                            
                            }
                    } else {
                        inputEmFoco.value = '';
                    }
                   };
            




    








