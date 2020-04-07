
let contadorInputs = 0;
let arregloPromedio= [];

eventListener();

function eventListener(){

    document.addEventListener('DOMContentLoaded', AddEvents);
}



function AddEvents(){

    document.getElementById('btnAddInputs').addEventListener('click', AddInput);

    document.getElementById('CalcularPromedio').addEventListener('click', CalcularPromedio);
}

function AddInput(){

    const output = document.getElementById('output');

    const divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');

    const divFG = document.createElement('div');
    divFG.setAttribute('class', 'form-group');

    const label = document.createElement('label');
    label.innerText = `Ingrese la calificación ${contadorInputs + 1}`;

    const inputFC = document.createElement('input');
    inputFC.setAttribute('class', 'form-control');
    inputFC.setAttribute('type', 'number');
    inputFC.setAttribute('placeholder', 'Ingrese valor');
    inputFC.setAttribute('id', `InputPromedio${contadorInputs}`);

    contadorInputs++;

    output.appendChild(divCol);
    divCol.appendChild(divFG);
    divFG.appendChild(label);
    divFG.appendChild(inputFC);

}

function CalcularPromedio(){
    llenarArray();
    let ZonePrint = document.getElementById('ZonePrint');
    let acumulador = 0;

    for(let i=0; i<contadorInputs; i++){

        acumulador += arregloPromedio[i];
    }

    acumulador /= contadorInputs;

    console.log(acumulador);

    ZonePrint.innerText = acumulador;
}


function llenarArray(){

    for(let x = 0; x < contadorInputs; x++){

        const valor = document.getElementById(`InputPromedio${x}`).value;
        
        if(!isNaN(valor)){
            
            arregloPromedio[x] = Number(valor);

        }else{
            arregloPromedio[x] = 0;
        }
    }


}

