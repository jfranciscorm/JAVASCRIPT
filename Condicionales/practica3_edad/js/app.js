const button = document.getElementById('btnComparar');

button.addEventListener('click', compararEdad);

function compararEdad(){



    let nombre1 = document.getElementById('Nombre1').value;
    let edad1 = Number(document.getElementById('Edad1').value);
    
    let edad2 = Number(document.getElementById('Edad2').value);
    let nombre2 = document.getElementById('Nombre2').value;

    const DivAlert = document.getElementById('PrintMayor')

    if(edad1 > edad2){

        DivAlert.innerText = nombre1;

    }else{
        DivAlert.innerText = nombre2;
    }
}