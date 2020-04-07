class ManipularLocalStorage{

    static ArrayActividades = [];

    static AgregarActLocalStorage(ContenidoActividades){

        this.ArrayActividades = this.ObtenerLocalStorage();
        this.ArrayActividades.push(ContenidoActividades);

        //JSON.stringify: convierte cualquier tipo de dato a string
        localStorage.setItem('actividades', JSON.stringify(this.ArrayActividades));

    }

    static ObtenerLocalStorage(){

        let actividadesObtenidasLS = [];

        if(localStorage.getItem('actividades') == null){
            return actividadesObtenidasLS;
        }

        //        //parse: Convierte el string a un array 
        return JSON.parse(localStorage.getItem('actividades'));


    }

    static EliminarActividadLocalStorage(contenido){
        
        let ActividadesLS = this.ObtenerLocalStorage();
        let ArrayNuevoActividadesLS = [];

        for(let i = 0; i < ActividadesLS[i]; i++){

            if(contenido !== ActividadesLS[i]){
                ArrayNuevoActividadesLS.push(ActividadesLS[i]);
            }
        }

        localStorage.setItem('actividades', JSON.stringify(ArrayNuevoActividadesLS));
    }
}