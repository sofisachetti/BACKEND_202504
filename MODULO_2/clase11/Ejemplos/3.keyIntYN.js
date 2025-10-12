// Importamos el modulo readline-sync
const readlineSync = require('readline-sync');

// Usamos el metodo keyInYN para hacer una pregunta de si/no al usuario (yes/no)
// Muestra el mensajey espera que el usuario responda 'y' para sí o 'n' para no
const deseaContinuar = readlineSync.keyInYN('¿Desea continuar con la operación?');

// Verificamos la respuesta del usuario usaando una estructura condicional
if (deseaContinuar) {
    // Si el usuario presionó 'y', la variabe deseaContinuar es true
    // Mostramos un mensaje indicando que la operacion continuara
    console.log('Continuando con la operacion...');
} else {
    // Si el usuario presionó 'n', la variable deseaContinuar es false
    // Mostramos un mensaje indicando que la operacion se ha cancelado 
    console.log('Operacion cancelada por el usuario');
}