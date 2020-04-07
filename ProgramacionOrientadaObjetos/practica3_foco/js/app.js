
eventListener();

const foco = new Foco;
const imagen = document.getElementById('imagen');

function eventListener(){

    document.getElementById('btnCambio').addEventListener('click', cambioEstado);
}

function cambioEstado(){
    imagen.src = foco.CambiarEstado();
}