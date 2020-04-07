/**
 * Crea un array de numeros de un tamaño pasado por teclado,
 * el array contendra numeros aleatorios primos entre los numeros
 * deseados, por ultimo nos indica cual es el mayor de todos
 * y la suma de los valores.
 * 
 * Haz un metodo para comprobar que el numero aleatorio es primo,
 * puedes hacer todos los metodos que necesites.
 */

eventListener();

const output = document.getElementById('output');

let ArregloNumerosPrimosGlobal = [];

function FillArrayGlobal(){
    for(let i = 0; i < 1000; i++){

        let bandera=true;

        for (let y = 2; y < i; y++){
            if(i % y == 0){
                bandera = false;
                break;
            }
        }
        if(bandera){
            ArregloNumerosPrimosGlobal.push(i);
        }
    }
    console.log(ArregloNumerosPrimosGlobal);
}

function eventListener(){
    document.addEventListener("DOMContentLoaded", FillArrayGlobal);
    document.getElementById('TamanoArray').addEventListener('keypress', InitApp);
}

function InitApp(event){

    if(event.key != "Enter") return; //Retorna un valor en este caso no retorna nada, 
                                    //solo sale de la función
    if(event.target.value == "") return;
    if(event.target.value <= 0) return;
    if(isNaN (event.target.value)) return;

    fillArray(event.target.value);
}

function fillArray(TamanoArray){

    let  ArregloNumerosPrimos = [];

    let imprimir = ""; 

    for(let i = 0; i < TamanoArray; i++){

        let numeroAleatorio = Math.floor(Math.random() * (ArregloNumerosPrimosGlobal.length - 1 )) + 1;
       
        ArregloNumerosPrimos.push(ArregloNumerosPrimosGlobal[numeroAleatorio]);

    }

    console.log(ArregloNumerosPrimos);

    imprimir += ArregloNumerosPrimos;

    const ZonePrint = document.createElement('div');
    ZonePrint.setAttribute('class', 'alert alert-success mt-3');
    ZonePrint.setAttribute('id', 'ZonePrint');
    ZonePrint.innerText = imprimir;
    output.appendChild(ZonePrint);

}