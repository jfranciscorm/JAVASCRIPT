
const output = document.getElementById('output');

eventListener();

function eventListener() {

    document.getElementById('btnMostrarInputs').addEventListener('click', mostrarInputs);
}

function mostrarInputs() {

    const NumeroInputs = Number(document.getElementById('NumeroInputs').value);


    if (NumeroInputs > 1000 || NumeroInputs <= 0) return;

    EliminarElementos();


    const row = document.createElement('div');
    row.setAttribute('class', 'row');


    for (let i = 0; i < NumeroInputs; i++) {

        const divCol = document.createElement('div');
        divCol.setAttribute('class', 'col-12');

        const divFG = document.createElement('div');
        divFG.setAttribute('class', 'form-group');

        const label = document.createElement('label');
        label.innerText = `Ingresa numero a guardar en el arreglo`;

        const input = document.createElement('input');
        input.setAttribute('class', 'form-control');
        input.setAttribute('id', `valorInput${i}`);
        input.setAttribute('type', 'number');

        row.appendChild(divCol);
        divCol.appendChild(divFG);
        divFG.appendChild(label);
        divFG.appendChild(input);
    }
    output.appendChild(row);

    const buttonObtenerResultado = document.createElement('button');
    buttonObtenerResultado.setAttribute('class', 'btn btn-outline-success btn-block');
    buttonObtenerResultado.setAttribute('id', 'btnCalcularResultado');

    buttonObtenerResultado.innerText = 'Calcular Resultado';
    row.appendChild(buttonObtenerResultado);

    document.getElementById('btnCalcularResultado').addEventListener('click', RealizarComparacion);

}

function EliminarElementos() {

    while (output.firstChild) {
        output.firstChild.remove();
    }
}


function RealizarComparacion() {

    const NumeroInputs = document.getElementsByTagName('input');

    let acumulador = 0;
    for( let x = 0; x < NumeroInputs.length; x++){

        for(let y = x + 1; y < NumeroInputs.length; y++){
            if(NumeroInputs[x].value == NumeroInputs[y].value){
                NumeroInputs[y].value = "";
            }
        }
        console.log(NumeroInputs[x].value);
    }

    MostrarDatos(NumeroInputs);
}

function MostrarDatos(NumeroInputsArreglo){

    let imprimir = "";
        
    for( let x = 0; x < NumeroInputsArreglo.length; x++){

        if(NumeroInputsArreglo[x].value!= ""){
            imprimir += NumeroInputsArreglo[x].value + " ";
        }
    }

    const ZonePrint = document.createElement('div');
    ZonePrint.setAttribute('class', 'alert alert-success mt-4');
    ZonePrint.setAttribute('id', 'ZonePrint');
    ZonePrint.innerText = imprimir;
    output.appendChild(ZonePrint);

}