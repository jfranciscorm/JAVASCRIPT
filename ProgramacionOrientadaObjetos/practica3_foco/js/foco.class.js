
class Foco{

    estado = false; 

    CambiarEstado(){
        
        this.estado =  !this.estado;

        if(this.estado){
            return './../assets/focoencendido.jfif';
        }else{
            return './../assets/focoapagado.jfif';
        }
    }

}