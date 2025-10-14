"use strict";
// archivo: ejercicio6.ts
Object.defineProperty(exports, "__esModule", { value: true });
/*Ejercicio 6: Uso de unknown
Declara una variable de tipo unknown.
Asigna diferentes tipos de valores a esta variable,
y utiliza el operador typeof para verificar el tipo
antes de imprimir los valores.*/
let valorDesconocido;
valorDesconocido = "Texto";
if (typeof valorDesconocido === "string") {
    console.log(`El valor es una cadena: ${valorDesconocido}`);
}
valorDesconocido = 42;
if (typeof valorDesconocido === "number") {
    console.log(`El valor es un número: ${valorDesconocido}`);
}
//# sourceMappingURL=ejercicio6.js.map