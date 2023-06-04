var inputs = document.querySelectorAll('.letra');
var palavras = document.querySelectorAll('.linha-palavra'); 
var aviso = document.querySelector('.aviso');

for (var i = 0; i < inputs.length; i++) {
    selecionaInputEmFoco (inputs[i]);
    LetraSelecionada(inputs[i]);
    
}

function LetraSelecionada(input) {
    document.addEventListener('keydown', function(event) {

        
        let caracteresPermitidos =
         ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
         "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 'm', "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        var novaLetra = event.key;
        
        if (input == inputEmFoco) {
            
        if(novaLetra === 'Enter'){
            event.preventDefault();
            return
        }
        
        if(novaLetra === "Backspace") {
            retornaLetra (input);
        }
        else { 
        if (caracteresPermitidos.includes(novaLetra)) {
            inputEmFoco.value = novaLetra.toLowerCase();
            if (input == inputEmFoco) {
            avancaLetra (input);}
        } else {
            if (novaLetra.startsWith("F")) {
                //Apenas para entrar nas teclas de comando
            } else {
            avisoErro ('Este caractere é inválido!');
            event.preventDefault();
        }}
            }}
       
         
    });
}

function avancaLetra (input) {
    document.addEventListener('keypress', function() {
     
        var proximo = input.nextElementSibling;
          proximo.focus();
        }

)}
;

function retornaLetra (input) {

        if (input.value == '') {
            var anterior = input.previousElementSibling;
            anterior.focus();
   
        } else {
            input.value = '';
        }
       }


    function avisoErro (nome) {
        aviso.innerHTML = nome;
        aviso.classList.add('aviso-ativo');
            setTimeout(() => {
                aviso.classList.remove('aviso-ativo');
            }, 2000);
    }
