// PASO 1: Importamos el modulo net de Node.js que proporciona funcionalidades para crear servidores TCP
const net = require('net');

// PASO 2: Creamos un servidor TCP
const server = net.createServer();
// Crea una nueva instancia de una servidor TCP. La funcion nos va a devolver un objeto server que se puede usar para manejar conexiones.

// PASO 3: Manejo de eventos
// Maneja el evento 'connection', que se emite cuando un cliente se conecta al servidor
server.on('connection', (socket) => {
    // Maneja el evento 'data', que se emite cuando el servidor recibe datos del cliente
    socket.on('data', (data) => {
        // Muestra en la consola la dirección y puerto del cliente junto con los datos recibidos
        console.log('\nEl cliente ' + socket.remoteAddress + ":" + socket.remotePort + " dice: " + data);
        // Envía una respuesta al cliente confirmando la recepción de los datos
        socket.write('Recibido!');
    });

    // Maneja el evento 'close', que se emite cuando la conexión con el cliente se cierra
    socket.on('close', () => {
        // Muestra un mensaje en la consola indicando que la comunicación con el cliente ha terminado
        console.log('Comunicación finalizada');
    });

    // Maneja el evento 'error', que se emite cuando ocurre un error en la conexión con el cliente
    socket.on('error', (err) => {
        // Muestra el mensaje de error en la consola
        console.log(err.message);
    });
});

// PASO 4: Inicia el servidor en el puerto 4000
server.listen(4000, () => {
    // Muestra un mensaje en la consola indicando que el servidor está escuchando en el puerto especificado
    console.log('Servidor está escuchando en el puerto', server.address().port);
});
