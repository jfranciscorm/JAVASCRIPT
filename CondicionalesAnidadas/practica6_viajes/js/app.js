const button = document.getElementById('btnPresupuesto')

button.addEventListener('click', calcPresupuesto)

function calcPresupuesto(){

    let costos = Number(document.getElementById('costos').value);
    let kmRecorridos = Number(document.getElementById('kmRecorridos').value);
    let noPersonas = Number(document.getElementById('noPersonas').value);

    let costoPersona;
    let costoTotal;

    const ZonePrint = document.getElementById('ZonePrint');

    let divImprimir;

    if(noPersonas > 20  ){

        
        costoTotal = (noPersonas*costos*kmRecorridos);
        costoPersona = (costoTotal / noPersonas);

        divImprimir = `<div class="alert alert-success mt-3">
                        El costo total es de: ${costoTotal} y el costo por persona es de: ${costoPersona} </div> `;
        
        ZonePrint.innerHTML = divImprimir;

    }else{

        costoTotal = (20*costos*kmRecorridos);
        costoPersona = (costoTotal / noPersonas);

        divImprimir = `<div class="alert alert-success mt-3">
                        El costo total es de: ${costoTotal} y el costo por persona es de: ${costoPersona} </div> `;
        
        ZonePrint.innerHTML = divImprimir;
    }
}