class Carro {
    posicionX = 0;
    posicionY = 0;

    constructor(posicionX, posicionY) {

        this.posicionX = posicionX;
        this.posicionY = posicionY;
    }

    MoverCarro(direccion, imagen) {
        switch (direccion) {

            case 'ArrowUp':
                if (this.posicionY <= 0) return;
                imagen.src = './../assets/carroNarriba.jfif';
                imagen.style.top = `${this.posicionY-=10}px`;

                break;

            case 'ArrowLeft':
                if (this.posicionX <= 0) return;
                imagen.src = './../assets/carroNizquierda.jfif';
                imagen.style.left = `${this.posicionX-=10}px`;

                break;

            case 'ArrowRight':
                if (this.posicionX >= 924) return;
                imagen.src = './../assets/carroNderecha.jfif';
                imagen.style.left = `${this.posicionX+=10}px`;

                break;

            case 'ArrowDown':
                if (this.posicionY >= 540) return;
                imagen.src = './../assets/carroNabajo.jfif';
                imagen.style.top = `${this.posicionY+=10}px`;

                break;
        }
    }

    verificarColision(PosicioneEstrellas = []) {
        console.log(this.posicionX, this.posicionY);
        for (let i = 0; i < PosicioneEstrellas.length; i++) {

            if (
               this.posicionX >= PosicioneEstrellas[i].styleLeft &&
               this.posicionX <= PosicioneEstrellas[i].styleLeftMax &&
               this.posicionY >= PosicioneEstrellas[i].styleTop &&
               this.posicionY <= PosicioneEstrellas[i].styleTopMax
                ){
                return i;
            }
            
        }
        return null;

    }
}