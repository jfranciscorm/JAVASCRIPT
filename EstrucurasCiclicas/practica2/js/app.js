
EventListener();

function EventListener(){

    const button = document.getElementById('btnInit');
    button.addEventListener('click', iniciarAplicacion);


}

function iniciarAplicacion(){

    let numeroAlumnos = Number(prompt('Cuantos alumnos son? ')); 


    let acumulador = 0; 
    for(let i = 1; i <= numeroAlumnos; i++){

        let edad=Number(prompt(`Ingrese la edad del alumno ${i}`));
        //acumulador = acumulador + edad;
        acumulador += edad;

    }
    let resultado = acumulador / numeroAlumnos;

    console.log(resultado);

    let ZoneImprimir = document.getElementById('ZonePrint');

    const button = document.getElementById('ZonePrint');
    button.addEventListener('click', iniciarAplicacion);

    ZoneImprimir.innerText = resultado;

}