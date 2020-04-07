let ladoA;
let ladoB;

let hipotenusa;
let totalHipo

let button = document.getElementById('btnCalcular');

button?.addEventListener('click', calcHipotenusa)


function calcHipotenusa(){

    ladoA = Number(document.getElementById('ladoA').value);
    ladoB = Number(document.getElementById('ladoB').value);

    hipotenusa = (Math.pow(ladoA,2)+Math.pow(ladoB,2));

    console.log(hipotenusa);
    totalHipo = Math.sqrt(hipotenusa);

    let imprimirHipotenusa = document.getElementById('imprimirHipotenusa');

    imprimirHipotenusa.innerText = totalHipo;
}