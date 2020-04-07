let ladoA;
let ladoB;
let ladoC;

let area;
let semiPerimetro;

let button = document.getElementById('btnCalcular');

button?.addEventListener('click', calcArea)

function calcArea(){

    ladoA = Number(document.getElementById('ladoA').value);
    ladoB = Number(document.getElementById('ladoB').value);
    ladoC = Number(document.getElementById('ladoC').value);

    semiPerimetro =  (ladoA+ladoB+ladoC)/2;

    console.log(semiPerimetro);

    area = Math.sqrt((semiPerimetro*(semiPerimetro-ladoA)*(semiPerimetro-ladoB)*(semiPerimetro-ladoC)));

    let imprimirArea = document.getElementById('imprimirArea');

    imprimirArea.innerText = area; 


}