

const contenidoTweet = document.querySelector('#txTeewt');
const listaTweets =  document.querySelector('#lista-tweets');

eventListener();
CargarTweetsLocalStorage();


function eventListener(){

    //Elemento que tenga el id txTeew
    document.querySelector('#formulario').addEventListener('submit', obtenerFormulario);
    listaTweets.addEventListener('click', eliminarTweet);
}

function obtenerFormulario(event){

    event.preventDefault();

    //trim quita los espacios vacios del inicio y del final de una cadena de texto
    if(contenidoTweet.value.trim()== "") return; 
     
    const InstanciaTweet = new Tweets(contenidoTweet.value);
    InstanciaTweet.AgregarTweetDOM(listaTweets, true);

    contenidoTweet.value = "";

}

function eliminarTweet(){

    Tweets.eliminarTweetDOM(event);
}

function CargarTweetsLocalStorage(){

    const TweetsLS = ManipularLocalStorage.ObtenerLocalStorage();

    for(let i = 0; i < TweetsLS.length; i++){

        const InstanciaText = new Tweets(TweetsLS[i]);
        InstanciaText.AgregarTweetDOM(listaTweets, false);

        
    }
    
}