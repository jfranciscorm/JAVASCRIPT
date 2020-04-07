const button = document.getElementById('btnComparar');

button.addEventListener('click', compararNumeros);

function compararNumeros(){


    let Numero1 = Number(document.getElementById('inpNumero1').value);
    let Numero2 = Number(document.getElementById('inpNumero2').value);

    const DivAlert = document.getElementById('printAlert')

    if(Numero1 > Numero2){

        console.log('Numero A es mayor');
        DivAlert.innerText = Numero1;

        
    }
    else{
        console.log('Numero B es mayor');
        DivAlert.innerText = Numero1;
        
    }
}