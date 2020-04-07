const button = document.getElementById('btnPresupuesto')

button.addEventListener('click', calcPresupuesto)

function calcPresupuesto(){

    const numPersonas = Number(document.getElementById('numPersonas').value);

    let presupuesto; 

    const ZonePrint = document.getElementById('ZonePrint');

    let divImprimir;

    if(numPersonas<=200){

        presupuesto = (95*numPersonas); 
        console.log(presupuesto);
        divImprimir = `<div class="alert alert-success mt-3">
        <p> El costo del banquete por persona es de: ${presupuesto} </p></div>`;

        ZonePrint.innerHTML = divImprimir;
    }else if( numPersonas>200 && numPersonas < 300){

        presupuesto = (85*numPersonas);
        console.log(presupuesto);

        divImprimir = `<div class="alert alert-success mt-3">
        <p> El costo del banquete por persona es de: ${presupuesto} </p></div>`;

        ZonePrint.innerHTML = divImprimir;
    }else if(numPersonas > 300){

        presupuesto = (75*numPersonas);
        console.log(presupuesto);
        divImprimir = `<div class="alert alert-success mt-3">
        <p> El costo del banquete por persona es de: ${presupuesto} </p></div>`;

        ZonePrint.innerHTML = divImprimir;
    }

}