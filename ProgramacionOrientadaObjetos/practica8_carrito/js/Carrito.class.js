class Carrito{

    AgregarCursoCarrito(InformacionCurso, TablaCarrito, origen){

        if(ManipularLocalStorage.VerificarCursoRepetido(InformacionCurso.id) && origen) return; //Curso repetidos ya no hace lo de abajo

        //crear una tabla para imprimir la informacion en el carrito
        const TableRow = document.createElement('tr');
        TableRow.innerHTML = `
            <td>
                <img src="${InformacionCurso.imagen}" width="100px"/>
            </td>
            <td>
                ${InformacionCurso.titulo}
            </td>
            <td>
                ${InformacionCurso.precio}
            </td> 
            <td>
                <a class="borrar-curso" data-id="${InformacionCurso.id}">X</a>
            </td> 
        `;
        TablaCarrito.appendChild(TableRow); // Mostrarlo en la pagina

        if(origen) ManipularLocalStorage.AgregarCarritoLocalStorage(InformacionCurso); // llama la info en el localstorage
    }

    static eliminarCursoCarrito(nodeDOM){ //no se necesita hacer una instancia por eso es static

        const idCurso = nodeDOM.querySelector('.borrar-curso').getAttribute('data-id');
        ManipularLocalStorage.eliminarCursoLocalStorage(idCurso);
        nodeDOM.remove();
    }

    static vaciarCarrito(TablaCurso){

        while(TablaCurso.firstChild){
            TablaCurso.firstChild.remove();
        }
        ManipularLocalStorage.vaciarCarritoLS();

    }
}