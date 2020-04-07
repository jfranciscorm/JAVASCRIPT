

class ManipularLocalStorage{


    static ArrayTweets = [];

    static AgregarTweetLocalStorage(ContenidoTweet){

        this.ArrayTweets = this.ObtenerLocalStorage();

        this.ArrayTweets.push(ContenidoTweet);

        // JSON.stringify: Convierte cualquier tipo de dato a String
        localStorage.setItem('tweets', JSON.stringify(this.ArrayTweets));
    }

    static ObtenerLocalStorage(){

        let tweetsObtenidosLS = [];

        if(localStorage.getItem('tweets') == null){
            return tweetsObtenidosLS;
        }

        //parse: Convierte el string a un array 
        return JSON.parse(localStorage.getItem('tweets'));

    }

    static EliminarTweetLocalStorage(contenido){

        let TweetsLS = this.ObtenerLocalStorage();
        let arrayNuevoTweetLS = [];

        for(let i = 0; i < TweetsLS.length; i++){

            if(contenido !== TweetsLS[i]){
                arrayNuevoTweetLS.push(TweetsLS[i]);
            }
        }

        localStorage.setItem('tweets', JSON.stringify(arrayNuevoTweetLS));
    }

}