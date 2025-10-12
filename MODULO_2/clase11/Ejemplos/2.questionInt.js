// Importamos el modulo readline-sync
const readlineSync = require('readline-sync');

// Utilizamos el mwtodo questionInt para pedir la edad del usuario
// Muestra el mensaje y espera que el usuario ingrese un numero entero
// Si se ingresa algo que no es un numero, vuelve a pedir la entrada
const edad = readlineSync.questionInt('Por favor, ingresa tu edad: ');

// Verificamos si la edad ingresada cumple con ciertos criterios
// Por ejemplo, verificar si el usuario es mayor de 18 años
if (edad >= 18) {
    // Si la condicion se cumple, mostramos este mensaje
    console.log('Eres mayor de edad y puedes entrar al club.');
} else {
    // Si la condicion nose cumple, mostraos estre otro mensaje
    console.log('Lo siento, no puedes ingresar.');
};

// Manejo de numeros invalidos:
// Si el usuario ingresa algo como "veinte", readline-sync seguirá pidiendo una entrada válida
// Este comportamiento asegura que siempre obtengamos un numero entero valido