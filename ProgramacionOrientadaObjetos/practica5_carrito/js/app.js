const imagen = document.getElementById('carro');
let sizeMarginLeft = 0;
let sizeMarginBottom = 0;


let posicionImagenes = [];

const carro = new Carro(0, 0);

const contenedor = document.getElementById('contenedor');

eventListener();


function eventListener(){

    ObtenerMargin();

    document.addEventListener('keydown', moveCar);
    contenedor.addEventListener('click', ponerPremio);
    window.addEventListener('resize', ObtenerMargin);

}

function moveCar(event){

    carro.MoverCarro(event.key, imagen);
    
    const response = carro.verificarColision(posicionImagenes);
    if(response!=null){
        
        Premios.EliminarPremio(contenedor, posicionImagenes[response].id);
        posicionImagenes.splice(response, 1);

    }
}

function ponerPremio(event){
    const premio = new Premios(event.x, event.y);

    posicionImagenes.push(premio.CrearImagen(contenedor , sizeMarginLeft));
    console.log(posicionImagenes);
}

function ObtenerMargin(){

    const MarginContainer = window.getComputedStyle(contenedor).getPropertyValue('margin-left');

    sizeMarginLeft = MarginContainer.substring(0 , (MarginContainer.length - 2));

    const MarginContainerBottom = window.getComputedStyle(contenedor).getPropertyValue('margin-bottom');

    sizeMarginBottom = MarginContainerBottom.substring(0, MarginContainerBottom.length - 2);

    //typeof: manda que tipo de dato es la variable
    // console.log(typeof marginLeftSize);


}