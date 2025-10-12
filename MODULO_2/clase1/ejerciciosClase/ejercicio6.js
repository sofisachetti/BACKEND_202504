/*
Ejercicio 6: Calculadora de promedio 
Escribe una función que reciba un array de números y devuelva el promedio.
Consigna:
•	Usa un bucle for para sumar los números.
•	Divide la suma total entre la cantidad de elementos del array.
*/

function calcularPromedio(numeros) {
    let suma = 0; // Inicializamos una variable para la suma

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]; // Sumamos cada elemento
    }

    return suma / numeros.length; // Calculamos el promedio
}

// Probamos la función
let calificaciones = [8, 9, 10, 7, 6];
console.log(calcularPromedio(calificaciones)); // Debe devolver 8