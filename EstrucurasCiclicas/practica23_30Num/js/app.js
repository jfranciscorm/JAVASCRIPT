function eventListener() {
    let button = document.getElementById("btnInit");
    button.addEventListener("click", sumaPromedio);
}

eventListener();

function sumaPromedio() {
    let promediopar = 0;
    let acumulador = 0;
    let sumaimpar = 0;
    let sumapar = 0;

    for (let x = 1; x <= 30; x++) {
        let numeros = Number(prompt(`Numero ${x}`));

        if (numeros % 2 != 0) {
            sumaimpar += numeros;
            console.log(acumulador);
        }

        if (numeros % 2 != 1) {
            acumulador++;
            sumapar += numeros;
            promediopar = sumapar / acumulador;
        }
        const imprimir = document.getElementById("imprimir");
        imprimir.innerText = `Suma de números impares:  ${sumaimpar}
      Promedio números pares: ${promediopar}`;
    }
}