class Todo{

    contenido = "";

    localStorage;

    constructor(contenido){

        this.contenido = contenido;
    }


    AgregarActDOM(contenedor, origen){
        const li = document.createElement('li');
        li.classList = 'list-group-item text-break';
        li.textContent = this.contenido;

        const btnEliminar = document.createElement('button');
        btnEliminar.classList = 'close';

        const span = document.createElement('span');
        span.classList = 'badge badge-pill text-danger';
        span.textContent = 'Not Done';

        contenedor.appendChild(li);
        li.appendChild(btnEliminar);
        btnEliminar.appendChild(span);
        if(origen) ManipularLocalStorage.AgregarActLocalStorage(this.contenido);

    }

    static eliminarActDOM(event){

        if(event.target.tagName !== 'SPAN') return;

        const liBorrado = event.target.parentElement.parentElement;
        let textoLiBorrado = liBorrado.textContent;
        textoLiBorrado = textoLiBorrado.substring(0, textoLiBorrado.length - 1);
        let textoRealizado = liBorrado.textContent;
        textoRealizado = textoRealizado.substring(0 , textoLiBorrado.length - 7);

        ManipularLocalStorage.EliminarActividadLocalStorage(textoLiBorrado);
        liBorrado.remove();

        const ActRealizadas = document.getElementById('lista-ActTerminadas');

        const li = document.createElement('li');
        li.classList = 'list-group-item text-danger text-break';
        li.innerHTML = `<span>${textoRealizado}</span>`;
        console.log(textoRealizado);

        const btnEliminar = document.createElement('button');
        btnEliminar.classList = 'close';
        
        const span = document.createElement('span');
        span.classList = 'badge badge-pill text-success';
        span.textContent = 'Done';

        ActRealizadas.appendChild(li);
        li.appendChild(btnEliminar);
        btnEliminar.appendChild(span);
        ManipularLocalStorage.EliminarActividadLocalStorage(textoLiBorrado);

    }

}