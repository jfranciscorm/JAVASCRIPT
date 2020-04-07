// Declaramos las variables a usar

let metros;
let preciopormetro;
let costodetrabajo;

//declaramos la variable button y se le asigna el boton de calcular
let button = document.getElementById('btnCalcular');

// Boton que esta atento al evento click con la funcion multiplicar
button?.addEventListener('click',multiplicar)

function multiplicar(){

    metros = Number(document.getElementById('metros').value);
    preciopormetro = Number(document.getElementById('preciopormetro').value);

    costodetrabajo = metros * preciopormetro;

    let imprimirResultado = document.getElementById('buttonResultado')

    //Imprimir elemento que no es input
    imprimirResultado.innerText = costodetrabajo;
}