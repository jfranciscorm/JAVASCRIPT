// let acumulador = 0;

// for (let Valorinicial = 0; Valorinicial < 10; Valorinicial++) {

//     let NumeroIngresado = Number(prompt('Ingresa el numero'));

//     acumulador = acumulador + NumeroIngresado;
// }

// const ZonaImprimir = document.getElementById('output');

// ZonaImprimir.innerText = acumulador;



let button;

function crearDom(){

    const output = document.getElementById('output');

    for(let x=0; x <= 5; x++){

        const div = document.createElement('div');
        div.classList.add('form.group');

        const label= document.createElement('label');
        label.innerText = `Ingresa el numero: ${x}`;

        const input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('class', 'form-control');
        input.setAttribute('id', `inpNumero${x}`);

        //Mete un div a un div
        output.appendChild(div);


        div.appendChild(label);
        div.appendChild(input);

    }

    const button = document.createElement('button');
    button.innerText = 'Calcular Suma';
    button.setAttribute('id', 'btnCalcularSuma');

    button.setAttribute('class', 'btn btn-outline-success btn-block')

    output.appendChild(button);

    EventListener();
}

function EventListener(){

    button = document.getElementById('btnCalcularSuma');

    button.addEventListener('click', suma);
}
crearDom();

function suma(){

    let acumulador = 0;
    for(let i = 0; i <= 5; i++){

        

        let numero = Number(document.getElementById(`inpNumero${i}`).value);
        acumulador = acumulador + numero;

    }

    console.log(acumulador);

}

