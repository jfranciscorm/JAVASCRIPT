class ManipularLocalStorage{

    static AgregarCarritoLocalStorage(informacionCursos){

        const cursosLS = this.ObtenerCursoLS();
        cursosLS.push(informacionCursos);        
        localStorage.setItem('Cursos', JSON.stringify(cursosLS)); // guardar la informacion en el localstorage
    }

    static ObtenerCursoLS(){
        if(localStorage.getItem('Cursos') == null) return []; // cuando no existe un valor regresa el valor null
        return JSON.parse(localStorage.getItem('Cursos'));
    }

    static eliminarCursoLocalStorage(idCurso){

        let cursosLS = this.ObtenerCursoLS();
        let nuevosCursosLS = []; //guardar en el local storage

        for(let i = 0; i < cursosLS.length; i++){
            if(cursosLS[i].id !== idCurso){
                nuevosCursosLS.push(cursosLS[i]); //validacion cuando es igual el id al idCurso
            }
        }


        localStorage.setItem('Cursos', JSON.stringify(nuevosCursosLS));
    }

    static vaciarCarritoLS(){
        localStorage.clear;
    }

    static VerificarCursoRepetido(idCurso){

        const cursosLS = this.ObtenerCursoLS();

        for(let i = 0; i < cursosLS.length; i++){
            if(idCurso == cursosLS[i].id){      //Curso existente
                return true;
            } 
        }
        return false; //Ningun curso repetido
    }
}