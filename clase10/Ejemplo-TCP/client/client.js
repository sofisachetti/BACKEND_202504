// Importa el módulo 'net' para manejar conexiones TCP y el módulo 'readline-sync' para leer entradas del usuario de manera sincrónica
const net = require('net');
const readline = require('readline-sync');

// Define las opciones de conexión para el cliente TCP: puerto 4000 y dirección IP localhost
const options = {
    port: 4000,
    host: '127.0.0.1'
};

// Crea una nueva conexión TCP con el servidor utilizando las opciones definidas
const client = net.createConnection(options);

// Maneja el evento 'connect', que se emite cuando el cliente se conecta exitosamente al servidor
client.on('connect', () => {
    console.log('Conexión satisfactoria!!'); // Muestra un mensaje indicando que la conexión se ha establecido
    sendLine(); // Llama a la función sendLine() para que el usuario pueda ingresar un mensaje
});

// Maneja el evento 'data', que se emite cuando el cliente recibe datos del servidor
client.on('data', (data) => {
    console.log('El servidor dice:' + data); // Muestra los datos recibidos del servidor en la consola
    sendLine(); // Llama a la función sendLine() para que el usuario pueda ingresar otro mensaje
});

// Maneja el evento 'error', que se emite cuando ocurre un error en la conexión
client.on('error', (err) => {
    console.log(err.message); // Muestra el mensaje de error en la consola
});

// Define la función sendLine() que permite al usuario ingresar un mensaje y decide qué hacer con él
function sendLine() {
    var line = readline.question('\ndigite alguna cosa\t'); // Muestra un prompt y lee la entrada del usuario de manera sincrónica
    if (line == "0") { // Verifica si el usuario ingresó "0"
        client.end(); // Cierra la conexión con el servidor si el usuario ingresó "0"
    } else {
        client.write(line); // Envía el mensaje ingresado por el usuario al servidor si no es "0"
    }
}