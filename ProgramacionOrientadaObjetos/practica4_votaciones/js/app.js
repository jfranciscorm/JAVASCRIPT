eventListener();

const output = document.getElementById('output');

function eventListener(){

    const button = document.getElementById('btnAceptar').addEventListener('click', eliminarElementos);
}

function eliminarElementos(){

    while(output.firstChild){
        output.firstChild.remove();
    }
}
