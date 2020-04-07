let altura;
let base;
let area;

let button = document.getElementById('btnCalcular');

button?.addEventListener('click',areaTriangulo)

function areaTriangulo(){

    altura = Number(document.getElementById('altura').value);
    base = Number(document.getElementById('base').value);

    area = (altura*base)/2;

    let imprimirArea = document.getElementById('imprimirResultado');

    imprimirArea.innerText = area;
}