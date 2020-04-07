let respCorrectas;
let respIncorrectas;
let respBlanco;

let puntajeFinal;

let button = document.getElementById('btnPuntaje');

button?.addEventListener('click', puntajeF)

function puntajeF(){

    respCorrectas = Number(document.getElementById('respCorrectas').value);
    respIncorrectas = Number(document.getElementById('respIncorrectas').value);
    respBlanco = Number(document.getElementById('respBlanco').value);

    puntajeFinal = (respCorrectas*4+respIncorrectas*-1+respBlanco*0);

    let imprimirPuntaje = document.getElementById('imprimirPuntaje');

    imprimirPuntaje.innerText = puntajeFinal;

    
    
}