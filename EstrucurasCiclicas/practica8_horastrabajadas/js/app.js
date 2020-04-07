

function eventListen(){

    const button = document.getElementById('btnInit');
    button.addEventListener('click', iniciarApp);


}

eventListen();

function iniciarApp(){

    let pago = prompt("Introduce el pago por hora de tu empleado");
    let horas;
    let sueldo;
    let acumulador = 0;
    for( let i = 1; i<=6; i++){

         horas = prompt(`Introduzca las horas trabajadas del dia ${i}`);

         sueldo = (horas*pago);

         acumulador = acumulador + sueldo;


    }


    let li = document.createElement('li');
    li.setAttribute('class', ' list-group-item bg-primary');
    li.innerText= `Las Horas trabajadas de tu empleado son: ${horas} y su sueldo es ${acumulador}`;


    console.log(acumulador);

    

    ZonePrint.appendChild(li);
}