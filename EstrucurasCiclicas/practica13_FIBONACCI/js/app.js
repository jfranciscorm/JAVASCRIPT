

function eventlistener(){

    const button = document.getElementById('btnInit')
    button.addEventListener('click', iniciarApp)

}

eventlistener();

function iniciarApp(){

    let numeroA = 0 ;
    let numeroB = 1;
    let aux;
    let contador = 2;
    let li;
     
    let numero = prompt("Ingresa numero");
    
    while(numero != contador && numero > 2){
        
        aux = numeroA + numeroB;
        numeroA = numeroB;
        numeroB = aux;
        contador++;

    }
        console.log(aux);
        li = document.createElement('li');
        li.setAttribute('class', ' list-group-item bg-primary');
        li.innerText= ` ${aux}`;

        ZonePrint.appendChild(li);

    if(numero == 1 ){

        console.log(numeroA);
        li = document.createElement('li');
        li.setAttribute('class', ' list-group-item bg-primary');
        li.innerText= ` ${numeroA}`;

        ZonePrint.appendChild(li);

    }else if(numero == 2){
        console.log(numeroB);
        li = document.createElement('li');
        li.setAttribute('class', ' list-group-item bg-primary');
        li.innerText= ` ${numeroB}`;

        ZonePrint.appendChild(li);
        
    }
}