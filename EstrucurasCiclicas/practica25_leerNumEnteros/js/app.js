function eventListener() {
    let button = document.getElementById("btnInit");
    button.addEventListener("click", leerNumeros);
}

eventListener();

function leerNumeros() {
    let numeros = Number(prompt("Ingrese cantidad de números a evaluar"));
    let acumulador = 0;
    let numerospositivos = 0;
    let promediopositivo = 0;
    let promedioTotal = 0;

    for (i = 1; i <= numeros; i++) {
        let calcular = Number(prompt("Ingrese números"));

        acumulador += calcular;
        promedioTotal = acumulador / numeros;

        if (calcular > 0) {
            numerospositivos++;
        }
        if (calcular > 0) {
            promediopositivo = acumulador / numerospositivos;
        }

        const imprimir = document.getElementById("imprimir");
        imprimir.innerText = `Numeros mayores a 0:  ${numerospositivos}
      Promedio total: ${promedioTotal}
      Promedio positivos: ${promediopositivo}`;
    }
}