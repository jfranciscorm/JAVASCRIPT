let Arreglo = [];
const output = document.getElementById('output');


function EventListener(){

    document.getElementById('btnAceptar').addEventListener('click', obtenerResultado);

    document.getElementById('btnReiniciar').addEventListener('click',reiniciarApp);

    document.addEventListener('DOMContentLoaded', CargarInputs);
}

EventListener();

function reiniciarApp(){

    window.location.reload();
}

function CargarInputs(){



    for(let x = 0; x < 10; x++){

        const divFG= document.createElement('div');
        divFG.setAttribute('class', 'form-group')

        const labelFG = document.createElement('label');
        labelFG.innerText=`Dame el valor de la posición ${x}`;

        const inputFC = document.createElement('input');
        inputFC.setAttribute('type','number');
        inputFC.setAttribute('placeholder','Ingresa valor');
        inputFC.setAttribute('class','form-control');
        inputFC.setAttribute('id',`inputValor${x}`);

        output.appendChild(divFG);
        divFG.appendChild(labelFG);
        divFG.appendChild(inputFC);

    }
}

function obtenerResultado(){


    for(let x = 0; x < 10; x++){
        
        const valor = document.getElementById(`inputValor${x}`).value;

        if(valor != ""){

            Arreglo[x] = valor; 
        }else{
            Arreglo[x] = `<span class="text-danger">No se ingreso el numero</span>`;
        }
    }

    MostrarValores();
}

function MostrarValores(){

    EliminarDom(); 

    const MostrarValoresUl = document.getElementById('mostrarArreglo');

    for( let x = 0; x < Arreglo.length; x++){

        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerHTML= `<p> Index: ${x}</p> <p> Valor: ${Arreglo[x]}</p>`;

        MostrarValoresUl.appendChild(li);



    }

    

}

function EliminarDom(){

    while(output.firstChild){
        output.firstChild.remove();
    }
}