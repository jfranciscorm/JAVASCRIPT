let cal1;
let cal2;
let cal3;
let cal4;
let cal5;

let promedio;
let matricula;

let button = document.getElementById('btnCalcular');

button?.addEventListener('click',calcPromedio)
button?.addEventListener('click',imprimirMatricula)

function calcPromedio(){

    cal1 = Number(document.getElementById('cal1').value);
    cal2 = Number(document.getElementById('cal2').value);
    cal3 = Number(document.getElementById('cal3').value);
    cal4 = Number(document.getElementById('cal4').value);
    cal5 = Number(document.getElementById('cal5').value);

    promedio = (cal1+cal2+cal3+cal4+cal5)/5;

    let imprimirPromedio = document.getElementById('imprimirPromedio');

    imprimirPromedio.innerText = promedio;

}

function imprimirMatricula(){

    matricula = Number(document.getElementById('matricula').value);

    let matri = document.getElementById('imprimirMatricula');

    matri.innerText = matricula;
}
