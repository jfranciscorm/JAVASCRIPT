const button = document.getElementById('btnImprimir');

button.addEventListener('click', imprimirArt);

function imprimirArt(){

    let nombre = document.getElementById('nombre').value;
    let clave = Number(document.getElementById('clave').value);
    let precio = Number(document.getElementById('precio').value);
    let precioDesc;

    const DivAlert = document.getElementById('PrintArticulo');

    let descuento;
   

    if(clave == 01){

        descuento = precio * .10;
        precioDesc = precio - descuento;

        console.log(clave); 
        DivAlert.innerText = `Nombre: ${nombre} Clave: 0${clave}  Precio: ${precio} Precio con Descuento: ${precioDesc}`; 
    }else{

        descuento = precio * .20;
        precioDesc = precio - descuento;

        //DivAlert.innerText = nombre + ' /'+clave +  ' /'+precio +  ' /'+precioDesc;
        DivAlert.innerText = `Nombre: ${nombre} Clave: 0${clave}  Precio: ${precio} Precio con Descuento: ${precioDesc}`;
    }
}