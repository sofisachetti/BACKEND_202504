/* Consigna:
Crea un servidor TCP que actúe como un servidor de eco. 
Cuando un cliente se conecte, el servidor debe recibir los datos enviados por el cliente y devolverlos exactamente igual (hacer un "eco").
Además, el servidor debe imprimir en la consola cada vez que un cliente se conecta, desconecta o envía datos. */

const net = require('net');

const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado.');

    // Evento 'data': Recibe datos del cliente y los devuelve (eco).
    socket.on('data', (data) => {
        console.log(`Datos recibidos: ${data.toString()}`);
        socket.write(data); // Envía los datos de vuelta al cliente.
    });

    // Evento 'end': El cliente cerró la conexión.
    socket.on('end', () => {
        console.log('El cliente se ha desconectado.');
    });

    // Evento 'close': La conexión se cerró.
    socket.on('close', () => {
        console.log('Conexión cerrada.');
    });
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000.');
});