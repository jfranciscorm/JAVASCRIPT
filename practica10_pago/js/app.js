let precio;
let litros;


let total;

let button = document.getElementById('btnCalcular');

button?.addEventListener('click', calcPrecio)

function calcPrecio(){

    precio = Number(document.getElementById('precioAgua').value);
    litros = Number(document.getElementById('metrosCubicos').value);

    total = (precio*litros);

    let imprimirPago = document.getElementById('imprimirPago');

    imprimirPago.innerText = total;
}