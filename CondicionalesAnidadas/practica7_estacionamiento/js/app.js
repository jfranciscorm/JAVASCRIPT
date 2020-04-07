

const button = document.getElementById('btnCalcular')
button.addEventListener('click', calcCobro)

function calcCobro(){


    let horas = Number(document.getElementById('horas').value);

    const ZonePrint = document.getElementById('ZonePrint');

    let total;
    let divImprimir;

    if(horas <= 2){

        total = horas*5;
        divImprimir = `<div class="alert alert-success mt-3">
                        El costo del estacionamiento es de: ${total} </div>`;

        ZonePrint.innerHTML = divImprimir;
        
    }else if(horas > 2 && horas <= 5){

        total = ((horas-2)*4+10);
        divImprimir = `<div class="alert alert-success mt-3">
                        El costo del estacionamiento es de: ${total} </div>`;

        ZonePrint.innerHTML = divImprimir;
    }else if (horas > 5 && horas <= 10){

        total = ((horas-5)*3+22);
        divImprimir = `<div class="alert alert-success mt-3">
                        El costo del estacionamiento es de: ${total} </div>`;

        ZonePrint.innerHTML = divImprimir;
    }else if(horas > 10){
        total = ((horas-10)*2+37);

        divImprimir = `<div class="alert alert-success mt-3">
                     El costo del estacionamiento es de: ${total} </div>`;
        ZonePrint.innerHTML = divImprimir;
    }

    

    
}
