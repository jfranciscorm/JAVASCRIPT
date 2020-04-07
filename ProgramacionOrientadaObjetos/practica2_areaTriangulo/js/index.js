"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Triangulo_class_1 = require("./Triangulo.class");
eventListener();
function eventListener() {
    document.getElementById('btnCalcular').addEventListener('click', calcularArea);
}
function calcularArea() {
    var altura = Number(document.getElementById('altura').value);
    var base = Number(document.getElementById('base').value);
    var triangulo = new Triangulo_class_1.Triangulo(base, altura);
    console.log(triangulo.area);
}
