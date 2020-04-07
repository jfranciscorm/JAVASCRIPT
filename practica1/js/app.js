

/**
 * Se declaran las variables que se utilizaran en el codigo
 * se le pone number por el tipo de dato
 */

let numero1;
let numero2;
let resultado;

// Se declara variable button y se le asigna el boton de calcular
let button = document.getElementById('btnCalcular');

// Boton atento al evento click con la funcion suma
button?.addEventListener('click',suma)

function suma(){

    // muestra mensaje dentro de la  consola
    // console.log('Ya jalo again');
    // Convertimos el string a number y lo obtenemos een las variables numero1 y numero2 
    numero1 = Number (document.getElementById('ipNumero1').value);
    numero2 = Number (document.getElementById('ipNumero2').value);

    resultado = numero1 + numero2;

    let imprimirResultado = document.getElementById('imprimirResulato');

    // Imprimir en un elemnto que no es un input
    imprimirResultado.innerText = resultado;


}
