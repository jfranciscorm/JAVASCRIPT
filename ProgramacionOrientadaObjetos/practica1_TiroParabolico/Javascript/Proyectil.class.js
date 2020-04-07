
class Proyectil{

    velocidadInicial = 0;
    angulo = 0;

    constructor(velocidadInicial, angulo){

        this.velocidadInicial = velocidadInicial;
        this.angulo = angulo;

        console.log(this.angulo, this.velocidadInicial);
    }


    calcularDistanciaX(tiempo){

        const DistanciaX = this.velocidadInicial * Math.cos(this.angulo * (Math.PI / 180 )) * tiempo;

        return DistanciaX;
    }

    calcularDistanciaY(tiempo){

        let DistanciaY = this.velocidadInicial * Math.sin(this.angulo * (Math.PI / 180));

        DistanciaY = DistanciaY * tiempo - .5 * 9.8 * Math.pow(tiempo, 2);

        return DistanciaY;
    }

    crearSpan(){

        for (let tiempo = 0; tiempo <= 7; tiempo += 0.01) {
            
            const span = document.createElement('span');

            const left =  this.calcularDistanciaX(tiempo);
            const bottom = this.calcularDistanciaY(tiempo);


            if((left < 0 || bottom < 0) || left > 99 || bottom > 99) break;
 
            //Afectamos la propiedad left
            span.style.left = `${left}%`;
            span.style.bottom = `${bottom}%`;

            document.getElementById('contenedor').appendChild(span);
            
        }
    }
}