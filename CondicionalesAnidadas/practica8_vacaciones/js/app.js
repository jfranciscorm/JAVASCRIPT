const button = document.getElementById('btnPresupuesto')
button.addEventListener('click', calcPresupuesto)

function calcPresupuesto(){

    let kms = Number(document.getElementById('destino').value);
    let precio = Number(document.getElementById('precio').value);
    let presupuesto = Number(document.getElementById('presupuesto').value);

    let costo = (kms*precio);

    const ZonePrint = document.getElementById('ZonePrint');

    let divImprimir;

    if(costo > presupuesto){

        divImprimir = `<div class="alert alert-danger mt-3">
        El precio es de: ${costo} 
        No tienes el suficiente dinero para este viaje, puedes quedarte en casa </div>`;
    
        ZonePrint.innerHTML = divImprimir;
    }else {

        divImprimir = `<div class="alert alert-success mt-3">
        El costo es de: ${costo} 
        Puedes viajar a tu destino </div>`;

        ZonePrint.innerHTML = divImprimir;
    }
}