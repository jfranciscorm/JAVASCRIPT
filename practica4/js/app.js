let radio;

const constantePi = 3.1416;

let resultado;

let button = document.getElementById('btnCalcular');

button?.addEventListener('click', areaCirculo);

function areaCirculo(){
    radio = Number(document.getElementById('InpRadio').value);

    // resultado = constantePi * (radio*radio);

    let radioelevado = Math.pow(radio, 2);

    resultado = radioelevado * Math.PI;

    let imprimirResultado = document.getElementById('imprimirResultado');

    imprimirResultado.innerText = resultado;


}