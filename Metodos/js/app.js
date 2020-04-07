

// .length() La longitud del array

// .push() Agrega elementos a la ultima posicion del array
// Opcion 1: Tomar array principal y a cada index impar sustituye su valor por un 0
// .pop() Elimina del elemento en la ultima posicion del array
// Opcion 2: Eliminar el ultimo elemento del array
// unshift() Agrega elementos al principio del array
// Opcion 3: Agrega elemento en la primer posicion
// .shift() Elimina el primerl elemento del array 
// Opcion 4: Elimina el primer elemento del array
//indexOf(10) Regresa el index de la posicion en el que se encuentra el 10
// Opcion 5: Encontrar todos los elementos con valor 10 y regresar en un array su posicion
// .sort() Ordenar el array
// Opcion 6: Ordenar un array
// .reverse()
// Opcion 7: Regresar el mismo array pero invertido 
// .splice()
// Opcion 8: Cambiar todos los elementos con valor 5 por la palabra cinco


EventListener();

//array principal
let array = [];
let outArray = [];

function EventListener(){

    document.getElementById('size').addEventListener('keypress', getSize);
    document.addEventListener('click', validarClick);

}


// e = Event
function getSize(e){

    if(e.key != 'Enter') return;
    if(e.target.value == '') return;
    if(isNaN(e.target.value)) return;
    if(e.target.value <= 0) return;

    createArray(e.target.value);
    e.target.value = '';

}

function createArray(size){

    //Array principal
    array = [];

    for(let i = 0; i < size; i++){

        array.push(Math.floor(Math.random()*(11-1)+1));
    }
    console.log(array);
}

function validarClick(e){

    //Key es el valor a evaluar
    switch (e.target.id) {
        case 'op1':

            for( let i = 0; i < array.length; i++){
                if((i + 1) % 2 == 0){
                    outArray.push(0);
                }else {
                    outArray.push(array[i]);
                }
            }console.log(outArray);

            break;

        case 'op2':

            array.pop();
            console.log(array);

            break;

        case 'op3':
            let random = Math.floor(Math.random()*(11 - 1 + 1));
            array.unshift(`nuevo${random}`);
            console.log(array);

            break;
        
        case 'op4':
            array.shift();
            console.log(array);

            break;

        case 'op5':
            let indices = [];
            let index = array.indexOf(10);

            while(index != -1){
                
                indices.push(index);
                index = array.indexOf(10 , index + 1);

            }console.log(indices);

            break;

        case 'op6':

            //En caso de ser strings, Numeros - Mayusculas - Minusculas 
            //[10Paco, PACO, paco]
            console.log(array.sort());

            break;

        case 'op7':
            console.log(array.reverse());
            
            break;

        case 'op8':
            for (let i = 0; i < array.length; i++) {
                
                if(array[i] == 5){

                    //Con dos parametros regresa el array pero sin el elemento de 
                    //remplazo y con trees con el elemento de remplazo
                    // (i, 1)
                    array.splice(i , 1, 'cinco');
                }

            } 
            console.log(array);



            break;
           
            
        default:
            return;
            break;
    }
    //Utiliza metodo push 
    // if(e.target.id == 'op1'){

    //     if((i + 1) % 2 == 0){
    //                 outArray.push(0);
    //             }else {
    //                 outArray.push(array[i]);
    //             }
    //         }console.log(outArray);
        
        
    // }else if (e.target.id == 'op2'){
    //     array.pop();
    //         console.log(array);
    // }
    
    // else return;
}