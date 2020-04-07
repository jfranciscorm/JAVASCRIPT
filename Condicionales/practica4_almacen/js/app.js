const button = document.getElementById('btnComparar');
 
button.addEventListener('click', compararCantidad);

function compararCantidad(){

    let cantidad = Number(document.getElementById('cantidad').value);
    let descuento;
    let total;
    const DivAlert = document.getElementById('PrintCantidad')

    if(cantidad > 1000){
        
        descuento = cantidad * 0.20;
        total = cantidad - descuento;

        DivAlert.innerText = total;
        
    }
    else{

        DivAlert.innerText = cantidad;
    }
}