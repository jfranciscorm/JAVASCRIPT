

function eventListener(){

    const button = document.getElementById('btnInit')
    button.addEventListener('click', iniciarApp)
}

eventListener();

function iniciarApp(){

    let numero = prompt("Ingresa el numero "); 
    let li;
    let cadena ="";
    do{
        if(numero %2 == 0){
        numero =  numero/2;
        
        }else{
        numero = (numero*3) + 1;
        }
        // console.log(numero);
        cadena = cadena + `${numero} ` ;
        console.log(cadena);

    }
    
    while(numero!=1);
    li = document.createElement('li');
    li.setAttribute('class', ' list-group-item bg-primary');
    li.innerText= ` ${cadena}`;

    ZonePrint.appendChild(li);

    



    
}