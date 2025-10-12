/*
Ejercicio 3: Ordenando números 
Crea una función que reciba un array de números y devuelva un nuevo array con los números ordenados de menor a mayor.
Consigna:
•	Usa el método sort().
*/

function ordenarNumeros(numeros) {
    return numeros.sort((a, b) => a - b); // Ordenamos de menor a mayor
}

// Probamos la función
let numeros = [5, 2, 9, 1, 7];
console.log(ordenarNumeros(numeros)); // Debe devolver [1, 2, 5, 7, 9]