const button = document.getElementById('btnId');

button.addEventListener('click', compararNumeros)

function compararNumeros(){

    const numero1 = Number(document.getElementById('id1').value);
    const numero2 = Number(document.getElementById('id3').value);
    const numero3 = Number(document.getElementById('id3').value);

    if(numero1 > numero2){
        if(numero1 > numero3){
            alert("numero1")
        }else{
            alert('numero3')
        }
    }else if(numero2 > numero3){
        alert('numero2')
    }else{
        alert('numero3')
    }

}