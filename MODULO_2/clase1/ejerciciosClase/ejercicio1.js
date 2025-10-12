/* 
Ejercicio 1: ¿Quién puede entrar al parque? 
Tienes un parque de diversiones que permite la entrada a personas mayores de 12 años y menores de 60. 
Escribe una función que reciba una lista de edades y devuelva cuántas personas pueden entrar al parque.
Consigna:
•	Usa un bucle for y condicionales.
•	Usa un array como entrada de la función.
•	Devuelve el número de personas que cumplen con los requisitos. 
*/

function personasQuePuedenEntrar(edades) {
    let contador = 0; // Inicializamos un contador

    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 12 && edades[i] <= 60) {
            contador++; // Incrementamos el contador si la edad está en el rango
        }
    }

    return contador; // Retornamos el número total de personas
}

// Probamos la función
console.log(personasQuePuedenEntrar(edades)); // Debe devolver 4
let edades = [10, 15, 35, 65, 12, 59];
