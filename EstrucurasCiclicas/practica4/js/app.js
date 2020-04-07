

function eventListener() {

    const button = document.getElementById('btnInit')
    button.addEventListener('click', initApplication)


}

eventListener();

function initApplication() {

    let Acumulador = 0;
    const listGroup = document.getElementById('listaAhorro');

    for (let i = 1; i <= 12; i++) {


        let saving = Number(prompt('Cual es tu ahorro del mes? '));

        //Acumulador + saving;
        Acumulador += saving;

        const li = document.createElement('li');
        li.setAttribute('class','list-group-item');
        li.innerText = `EL dinero ahorrado en el mes ${i} es: ${Acumulador}`;

        //El padre el el ul y el hijo es el li
        listGroup.appendChild(li);

        console.log(Acumulador);
    }

    const li =  document.createElement('li');
    li.setAttribute('class', 'list-group-item bg-danger')
    li.innerText = `El dinero ahorrado en el año es ${Acumulador}`;

    listGroup.appendChild(li);


}