const button = document.getElementById('btnComparar');

button.addEventListener('click', verificarCalificacion);

function verificarCalificacion(){

    const Calificacion = Number(document.getElementById('calificacion').value);
 
    const DivAlert = document.getElementById('printAlert')
    if (Calificacion > 8){
        DivAlert.innerText = ('Aprobado');
    }
    else{
        DivAlert.innerText = ('Reprobado');

        const AudioDonRamon = document.getElementById('audioReprobado');

        AudioDonRamon.play();
    }
}