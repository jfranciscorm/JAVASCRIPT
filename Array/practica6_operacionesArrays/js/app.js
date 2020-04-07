eventListener();

function eventListener(){

    document.addEventListener("DOMContentLosaded", fillArrayA, fillArrayB);
    document.getElementById('TamanoArray').addEventListener('keypress', InitApp);
}

function InitApp(event){

    if(event.key != "Enter") return; //Retorna un valor en este caso no retorna nada, 
                                    //solo sale de la función
    if(event.target.value == "") return;
    if(event.target.value <= 0) return;
    if(isNaN (event.target.value)) return;

    fillArrayA(event.target.value);
    fillArrayB(event.target.value);
}

function fillArrayA(TamanoArray){

    let arregloA = [];

    for (let i = 0; i < TamanoArray; i++) {
        
        let numeroAleatorio = Math.floor(Math.random() * (100 - (-100)) + (-100));

        arregloA.push(numeroAleatorio);
    }

    console.log(arregloA);
}

function fillArrayB(TamanoArray){

    let arregloB = [];

    for (let i = 0; i < TamanoArray; i++) {
        
        let numeroAleatorio = Math.floor(Math.random() * (100 - (-100)) + (-100));

        arregloB.push(numeroAleatorio);
    }

    console.log(arregloB);
    
}