// Importamos el modulo readline-sync
const readlineSync = require('readline-sync');

// Pedimos al usuario que ingrese su nombre
const nombre = readlineSync.question('Ingrese su nombre: ');

// Pedimos al usuario que ingrese su edad
const edad = readlineSync.question('Ingrese su edad: ');

// Mostramos un mensaje utilizando la infromacion ingresada
console.log(`Hola ${nombre}! Tienes ${edad} anios.`);