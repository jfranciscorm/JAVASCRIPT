let tiempo;
let velocidad;

let distancia;


let button = document.getElementById('btnCalcular');

button?.addEventListener('click',calcDistancia)

function calcDistancia(){

    tiempo = Number(document.getElementById('tiempo').value);
    velocidad = Number(document.getElementById('velocidad').value);

    distancia = (tiempo*velocidad);

    let imprimirDistancia = document.getElementById('distancia');

    imprimirDistancia.innerText = distancia;
}