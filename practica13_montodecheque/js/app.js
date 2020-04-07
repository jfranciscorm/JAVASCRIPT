let hotel;
let comida;
let dias;
const bono=100;

let total;

let button = document.getElementById('btnCalcular');

button?.addEventListener('click' , calcMonto)

function calcMonto(){

    hotel = Number(document.getElementById('precio').value);
    comida = Number(document.getElementById('dineroComida').value);
    dias = Number(document.getElementById('dias').value);

    total = (dias)*(hotel+comida+bono);

    let imprimirMonto = document.getElementById('imprimirMonto');

    imprimirMonto.innerText = total;
    
}