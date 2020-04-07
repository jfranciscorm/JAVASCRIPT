function eventListener(){

    const button = document.getElementById('btnInit')
    button.addEventListener('click', initApplication)

}

eventListener();
function initApplication(){

    let mayormil = 0;
    let menormil = 0;
    let menorquinientos = 0;
    let precioventa;
    let noVentas = prompt("Ingresa el numero de ventas durante el dia: ");

    let li1 = document.createElement('li');
    li1.setAttribute('id', 'mayormil');
    li1.setAttribute('class', 'list-group-item bg-primary');


    let li2 = document.createElement('li');
    li2.setAttribute('id', 'menormil');
    li2.setAttribute('class', 'list-group-item bg-primary');


    let li3 = document.createElement('li');
    li3.setAttribute('id', 'menorquinientos');
    li3.setAttribute('class', 'list-group-item bg-primary');


    let acumMil = 0;
    let acumQuinMil = 0;
    let acumQuin = 0;

    for(let i = 1; i <= noVentas; i++){

         precioventa = prompt(`Introduzca el monto de las ventas del dia de hoy: `);

        if(precioventa > 1000){

            mayormil++;
            acumMil += precioventa;

            console.log(mayormil);
        }else if(precioventa > 500 && precioventa <=1000){

            menormil++;
            acumQuinMil += precioventa;
        }else if(precioventa <= 500){
            menorquinientos++;
            acumQuin += precioventa;
        }
    }

    li1.innerHTML = `Las ventas mayores a 1000 fueron: ${mayormil}  <br> y el monto es de : ${acumMil}`;
    //Incrementa Strings, concatena los Strings
    li2.innerHTML += `Las ventas menor a 1000 y mayores a 500 fueron: ${menormil}    <br>  y el monto es de : ${acumQuinMil}`;
    li3.innerHTML += `Las ventas menores a 500 fueron: ${menorquinientos} <br> y el monto es de : ${acumQuin} `;

    ZonePrint.appendChild(li1);
    ZonePrint.appendChild(li2);
    ZonePrint.appendChild(li3);

}