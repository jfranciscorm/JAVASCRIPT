const button = document.getElementById('btnCantidad');

button.addEventListener('click', calcCantidad)

function calcCantidad() {

    let cantidad = Number(document.getElementById('cantidad').value);

    let resultado;
    let resultadoFinal;

    const ZonePrint = document.getElementById('ZonePrint');

    let divImprimir;

    if (cantidad > 3600) {

        resultado = (cantidad * .16);
        resultadoFinal = (cantidad - resultado);
        // console.log(resultadoFinal);
        divImprimir = `<div class="alert alert-success mt-3"> 
                        El costo de tu traje es: $${resultadoFinal} MXN </div>`;


        ZonePrint.innerHTML = divImprimir;
    } else {

        resultado = (cantidad * .07);
        resultadoFinal = (cantidad - resultado);
        // console.log(resultadoFinal);
        divImprimir = `<div class="alert alert-success mt-3"> 
                        El costo de tu traje es: $${resultadoFinal} MXN </div>`;

        ZonePrint.innerHTML = divImprimir;

    }
}