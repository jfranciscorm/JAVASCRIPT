/*crea un array de numeros donde le indiquemos por teclado el tamaño del array, rellenaremos
el array con numeros aleatorios entre 0 y 9, al final muestra por pantalla el valor de cada posicion
y la suma de todos los valores. Haz un metodo para rellenar el array (que tenga como parametros los numeros entre los
que tenga que generar), para mostrar el contenido y la suma del array y un metodo privado para generar numero
aleatorio (lo puedes usar para otros ejercicios).*/

const output = document.getElementById('output');

eventListener();

function eventListener(){

    document.getElementById('TamanoArray').addEventListener('keypress', CrearInputs);
}

function CrearInputs(event){


    if(event.key=="Enter"){

        /**
         * si isNAN = true NO es un numero
         * si isNAN = false SI es un numero
         */

        if(isNaN(event.target.value)) return; //retorna el valor desde una funcion (retorns el varlor 0)

        
        RellenarArreglo(event.target.value);

    }
 
}

function RellenarArreglo(tamanoArray){

    let arregloNumeroAleatorios = [];

    for(let i = 0; i < tamanoArray; i++){

        arregloNumeroAleatorios[i] = Math.floor(Math.random() * (10 - 1)) + 1;


    }

    MostrarValores(arregloNumeroAleatorios);
}

function MostrarValores(arregloLleno){

    var pos;
    let imprimir = "";

    for( let i = 0; i < arregloLleno.length; i++){

        imprimir += arregloLleno[i] + " ";
        
        pos = arregloLleno.indexOf(arregloLleno[i] );

        console.log(pos);

        console.log(arregloLleno);
    }

    const ZonePrint = document.createElement('div');
    ZonePrint.setAttribute('class', 'alert alert-success mt-4');
    ZonePrint.setAttribute('id', 'ZonePrint');
    ZonePrint.innerText = imprimir;
    output.appendChild(ZonePrint);

    const ZonePosicion = document.createElement('div');
    ZonePosicion.setAttribute('class', 'alert alert-success mt-4');
    ZonePosicion.setAttribute('id', 'ZonePrint');
    ZonePosicion.innerText = pos;
    ZonePrint.appendChild(ZonePosicion);
}

