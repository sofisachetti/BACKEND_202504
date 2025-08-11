// Importamos el modulo readLine para trabajar con entrada y salida de datos mas interactivas
const readline = require('readline');

// PASO 1: Utilizacion de process
// Instalamos el módulo 'dotenv' para poder cargar las variables de entorno desde el archivo '.env'
// npm install dotenv
require('dotenv').config();

// Establecemos un saludo predeterminado usando nuestra variable de entorno
const defaultGreeting = process.env.GREETING || 'Hola'; // Si no se define en el archivo .env, usamos 'Hola' como valor por defecto.

// Procesamos los argumentos de la linea de comandos (process.argv)
// Capturamos el primer argumento despues del nombre del archivo como el nombre del usuario
// Si no se proporciona un argumento, usamos 'Invitado' como valor predeterminado
const args = process.argv.slice(2);
const userName = args[0] || 'Invitado';

// Mostarmos el saludo personalizado y el nombre del usuario:
console.log(defaultGreeting, userName, '!');

// Información sobre el entorno de ejecucion
console.log('Informacion sobre el entorno de ejecucion: ')
// Directorio actual desde donde se ejecuta el programa
console.log("- Directorio actual: ", process.cwd());
//Plataforma del sistema operativo
console.log("- Plataforma: ", process.platform);

// PASO 2: Utilizacion de readline
// Creacion de una interfaz readline para poder interactuar con el usuario
const rl = readline.createInterface({
    input: process.stdin, // 'input' se configura como el flujo de entrada
    output: process.stdout // 'output' se configura como el flujo de salida de los datos
});

// Usamos el metodo 'rl.question' para mostrar un pregunta al usaurio
// La pregunta se muestra en la consola y la respuesta se procesa en el callback
rl.question('¿Cuantos años tienes? ', (age) => {
    // Mostrar un mensaje con la edad del usuario
    console.log('Wow, ', age, ' años es una gran edad!');
    rl.close(); // cerrar la interfaz readline despues de obtener la respuesta
});

// Manejo del evento close que se emite cuando se cierra la interfaz readline
// mostrar un mensaje de despedida y finalizamos el programa de forma ordenada
rl.on('close', () => {
    console.log('Gracias por usar este programa, adios!');
    process.exit(0);
});