
class Premios{

    posicionX = 0;
    posicionY = 0;

    constructor(posicionX, posicionY){

        this.posicionX = posicionX;
        this.posicionY = posicionY;

    }

    static EliminarPremio(contenedor, id){
        contenedor.removeChild(document.getElementById(`${id}`));
    }

    CrearImagen(Contenedor, sizeMarginLeft, sizeMarginBottom){
        const imagen = document.createElement('img');
        imagen.src = './../assets/Estrella.jpg';
        imagen.style.width = '50px';
        imagen.id = `imagen${Math.random().toString().split(".")[1]}`
  

        const styleLeft = this.posicionX - sizeMarginLeft;
        const styleTop = this.posicionY ; 


        imagen.style.left = `${styleLeft}px`;
        imagen.style.top = `${styleTop - 25}px`;



        Contenedor.appendChild(imagen);

        return{
            id: imagen.id,
            styleLeft: styleLeft - 50,
            styleTop: styleTop - 80, 
            styleLeftMax:styleLeft + 50,
            styleTopMax:styleTop + 50
        };
    }
}