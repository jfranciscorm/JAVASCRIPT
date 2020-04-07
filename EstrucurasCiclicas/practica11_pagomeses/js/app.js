function eventListener(){

    const button = document.getElementById('btnInit')
    button.addEventListener('click', iniciarApp)

}

eventListener();

function iniciarApp(){

    let meses = 20;
    
    let pagoInicial = 10;
    let pagoFinal = 0;
   
    for( let i = 1;  i <= meses; i++){

        
        pagoInicial *= 2;

        pagoFinal = pagoFinal + pagoInicial;

        
      
        console.log(pagoInicial);
        let li = document.createElement('li');
        li.setAttribute('class' , 'list-group-item bg-primary');
        li.innerText = `El pago del mes ${i} es de ${pagoInicial} `;
        ZonePrint.appendChild(li);
    }
        let li = document.createElement('li');
        li.setAttribute('class' , 'list-group-item bg-danger');
        li.innerText = `El pago total es de: ${pagoFinal} `;
        ZonePrint.appendChild(li);
    


}