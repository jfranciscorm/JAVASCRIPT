eventListener();

function eventListener(){

    document.getElementById('btnCalcular').addEventListener('click', calcularRecorrido);


}

function calcularRecorrido(){


    let angulo = Number(document.getElementById('angulo').value);
    let velocidad = Number(document.getElementById('velocidad').value);

    //INSTANCIAR CLASE
    const proyectil = new Proyectil(velocidad, angulo);

    console.log(proyectil.calcularDistanciaY(1));

    proyectil.crearSpan();
}