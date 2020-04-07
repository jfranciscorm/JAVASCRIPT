let punto1x;
let punto1y;
let punto2x;
let punto2y;

let distancia;

let button = document.getElementById('btnCalcular');

button?.addEventListener('click', calcDist)

function calcDist(){

    punto1x = Number(document.getElementById('punto1X').value);
    punto1y = Number(document.getElementById('punto1Y').value);
    punto2x = Number(document.getElementById('punto2X').value);
    punto2y = Number(document.getElementById('punto2Y').value);

    distancia = Math.sqrt(Math.pow(punto2x-punto1x, 2)+Math.pow(punto2y-punto1y, 2));

    let imprimirDistancia = document.getElementById('imprimirDistancia');

    imprimirDistancia.innerText = distancia;

}