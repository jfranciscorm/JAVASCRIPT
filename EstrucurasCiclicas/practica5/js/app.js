

function eventListener(){

    const button = document.getElementById('btnInit')
    button.addEventListener('click', initApplication)

}

eventListener();

function initApplication(){

    const cantidades = Number(prompt('Cuantos numeros vas a evaluar? '));

    let acumuladoresMenores = 0;

    let acumuladoresMayores = 0;

    for(let x = 0; x < cantidades; x++){

        let Numero = Number(prompt('Numero a evaluar? '));

        if(Numero <= 0){
            acumuladoresMenores++;

        }else{
            acumuladoresMayores++;
        }
    }

    const li = document.createElement('li');
    li.setAttribute('class', 'list-group-item bg-primary')
    li.innerHTML = `<div> Numeros Mayores: ${acumuladoresMayores} <br> Numeros Menores: ${acumuladoresMenores}`;

    ZonePrint.appendChild(li);
}