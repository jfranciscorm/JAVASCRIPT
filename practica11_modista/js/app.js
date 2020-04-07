let metros;
const pulgada = 39.3701;

let pulgadas;

let button = document.getElementById('btnCalcular');

button?.addEventListener('click', calcPulgadas)

function calcPulgadas(){

    metros = Number(document.getElementById('metrosTela').value);

    pulgadas = (metros*pulgada);

    console.log(pulgadas);

    let imprimirPulgadas = document.getElementById('imprimirPulgadas');

    imprimirPulgadas.innerText = pulgadas;
}

