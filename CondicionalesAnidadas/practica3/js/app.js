const button = document.getElementById('btnPromedio')

button.addEventListener('click', calcPromedio)

function calcPromedio(){

    const numero1 = Number(document.getElementById('cal1').value);
    const numero2 = Number(document.getElementById('cal2').value);
    const numero3 = Number(document.getElementById('cal3').value);

    let resultado = (numero1+numero2+numero3)/3;

    // let cadena = 'La calificaion es: ' + numero1;
    // let cadena = `La calificacion es: ${numero1}`;
    const ZonePrint = document.getElementById('ZonePrint');

    let divImprimir;


    if(resultado >=9 ){

        divImprimir = `<div class="alert alert-success mt-3">
        <p> El alumno a aprobado </p></div>`;

        //innerHTML; Elimina las etiquetas y solo imprime el texto plano
        ZonePrint.innerHTML = divImprimir;
    }else if(resultado>=6 && resultado<9){

        divImprimir = `<div class="alert alert-warning mt-3">
        <p> El alumno es regular </p></div>`;

        ZonePrint.innerHTML = divImprimir;
    }else if(resultado<6){

        divImprimir = `<div class="alert alert-danger mt-3">
        <p> El alumno no a aprobado </p></div>`;

        ZonePrint.innerHTML = divImprimir;

    }
}