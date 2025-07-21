/*
Ejercicio 2: El menú del día 
Escribe una función que reciba un objeto con platos y precios, y devuelva los platos cuyo precio sea menor a $20.
Consigna:
•	Usa un bucle for...in.
•	Usa objetos y arrays.
*/

function platosBaratos(menu) {
    let platos = []; // Inicializamos un array vacío

    for (let plato in menu) {
        if (menu[plato] < 20) {
            platos.push(plato); // Agregamos el plato si cumple con la condición
        }
    }

    return platos; // Retornamos los platos baratos
}

// Probamos la función
let menu = {
    "Ensalada": 15,
    "Sopa": 8,
    "Carne": 25,
    "Pasta": 18
};
console.log(platosBaratos(menu)); // Debe devolver ["Ensalada", "Sopa", "Pasta"]