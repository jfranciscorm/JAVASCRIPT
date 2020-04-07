
const contenidoTodo  = document.querySelector('#txToDo');
const listaToDo = document.querySelector('#lista-atividades');


eventListener();
CargarActividadesLocalStorage();

function eventListener(){

    document.querySelector('#formulario').addEventListener('submit', obtenerFormulario);
    listaToDo.addEventListener('click', eliminarActividad);
    
}

function obtenerFormulario(event){

    event.preventDefault();

    //trim quita los espacios vacios del inicio y del final de una cadena de texto
    if(contenidoTodo.value.trim()== "") return;

    const InstanciaActividad = new Todo(contenidoTodo.value);
    InstanciaActividad.AgregarActDOM(listaToDo, true);

    contenidoTodo.value = "";
}



function eliminarActividad(){

    Todo.eliminarActDOM(event);
}

function CargarActividadesLocalStorage(){

    const ActividadesLS = ManipularLocalStorage.ObtenerLocalStorage();

    for(let i = 0; i < ActividadesLS.lenght; i++){

        const InstanciaText = new Todo(ActividadesLS[i]);
        InstanciaText.AgregarActDOM(listaToDo, false);
    }
}
