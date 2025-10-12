/*
Ejercicio 7: Filtrar palabras largas 
Escribe una función que reciba un array de palabras y un número, y devuelva las palabras que tienen más caracteres que el número dado.
Consigna:
•	Usa el método filter().
•	Usa una función flecha para simplificar el código.
*/

function filtrarPalabrasLargas(palabras, longitud) {
    return palabras.filter(palabra => palabra.length > longitud);
}

// Probamos la función
let palabras = ["javascript", "html", "css", "nodejs"];
console.log(filtrarPalabrasLargas(palabras, 4)); // Debe devolver ["javascript", "nodejs"]