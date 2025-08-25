// Importamos el modulo readline-sync
const readlineSync = require('readline-sync');

// Definimos un array con las opciones de lenguajes de programacion
const lenguajes = ['Javascript', 'Python', 'Java', 'C++', 'Ruby'];

// Usamos el metodo keyInSelect para mostrar las opciones del usuario
// El prompt es el mensaje que aparece antes de las opciones
// El usuario debe seleccionar un numero correspondiente a la opcion
const indiceSeleccionado = readlineSync.keyInSelect(lenguajes, '¿Cual es tu lenguaje de programacion?')

// Verificamos si el usuario selecciono una opcion o cancelo la operacion
if (indiceSeleccionado === -1) {
    console.log('No has seleccionado ningun lenguaje');
} else {
    // Si el usuario selecciona una opcion, mostramos el lenguaje elegido 
    console.log(`Has seleccionado ${lenguajes[indiceSeleccionado]}`);
};

