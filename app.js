let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


console.log(numeroSecreto);

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
     asignarTextoAElemento('p',`Acertaste el Número Secreto en ${intentos} ${(intentos === 1) ? 'Vez' : 'Veces'}`)
     document.getElementById('reiniciar').removeAttribute('disabled'); 
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoAElemento ('p','El Número Secreto es Menor')
        } else {
            if (numeroDeUsuario < numeroSecreto); {
                asignarTextoAElemento ('p','El Número Secreto es Mayor')
            }
        }
    }
    intentos++;
    limpiarCaja();

  
    return;

}

function limpiarCaja() {
document.querySelector('#valorUsuario').value = '';
}


function asignarTextoAElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;

}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoAElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoAElemento('h1', 'Juego del Número Secreto');
    asignarTextoAElemento('p',`Indica un Número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero secreto
    //indicar el numero de intentos
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();