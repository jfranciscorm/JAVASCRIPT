const TablaCarrito = document.querySelector('#lista-carrito tbody');




EventListener();

function EventListener(){

    document.querySelector('#lista-cursos').addEventListener('click', GuardarCursoCarrito);
    document.querySelector('#carrito').addEventListener('click', eliminarCarrito);

    document.querySelector('#vaciar-carrito').addEventListener('click', vaciarCarrito);

    IniciarCarrito();
}

function GuardarCursoCarrito(event){

   event.preventDefault(); //Quitar la action del # en el html
    
    if(event.target.classList.value.search('agregar-carrito') == -1) return;//No estamos presionando el botton

    const curso = event.target.parentElement.parentElement; //Para poder ir a varias etiquetas del div e imprimir el que necesitamos

    //creamos un objeto para obtener la info del html
    const informacionCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent, //.precio por que asi se llama la clase, span es su hijo
        id:curso.querySelector('a').getAttribute('data-id'),
    };

    //instanciar la clase carrito para poder llamar al objeto
    const carrito = new Carrito();
    carrito.AgregarCursoCarrito(informacionCurso, TablaCarrito, true);
        }
    
/*Search se utiliza para buscar la palabra */

function IniciarCarrito(){

    const cursosLS = ManipularLocalStorage.ObtenerCursoLS();
    
    for(let i=0; i < cursosLS.length; i++){

        const carrito = new Carrito();
        carrito.AgregarCursoCarrito(cursosLS[i], TablaCarrito, false); 
    }

}

function eliminarCarrito(event){

    if(event.target.className !== 'borrar-curso') return; //valida la accion de tocar la x

    Carrito.eliminarCursoCarrito(event.target.parentElement.parentElement); //Eliminamos el curso del carrito

    
}

function vaciarCarrito(){

    Carrito.vaciarCarrito(TablaCarrito);

}
