

function eventListener(){

    const button = document.getElementById('btnInit')
    button.addEventListener('click', initApplication)


}

eventListener();

function initApplication(){

    for( let i = 100; i >= 0; i--){

        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerText = `Numero: ${i}`;

        ZonePrint.appendChild(li);
    }
}