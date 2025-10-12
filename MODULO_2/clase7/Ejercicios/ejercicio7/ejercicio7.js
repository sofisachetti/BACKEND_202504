/* Consigna:
Crea un servidor TCP que permita a múltiples clientes conectarse y enviar mensajes. 
Cada mensaje enviado por un cliente debe ser retransmitido a todos los demás clientes conectados. 
El servidor debe notificar cuando un cliente se conecta o desconecta.
Requisitos:
•	Usa un array para almacenar las conexiones de los clientes.
•	Usa el evento data para recibir mensajes y retransmitirlos a todos los clientes.
•	Usa el evento end para eliminar a un cliente del array cuando se desconecta.
•	Notifica a los demás clientes cuando alguien se conecta o desconecta.
*/

const net = require('net');
const clients = [];

const server = net.createServer((socket) => {
    clients.push(socket);
    console.log('Nuevo cliente conectado.');

    socket.write('Bienvenido al chat!\n');

    // Notificar a todos los clientes sobre la nueva conexión
    clients.forEach(client => {
        if (client !== socket) {
            client.write('Un nuevo usuario se ha unido al chat.\n');
        }
    });

    socket.on('data', (data) => {
        const message = data.toString().trim();
        // Retransmitir el mensaje a todos los clientes
        clients.forEach(client => {
            if (client !== socket) {
                client.write(`Mensaje: ${message}\n`);
            }
        });
    });

    socket.on('end', () => {
        clients.splice(clients.indexOf(socket), 1);
        console.log('Cliente desconectado.');
        // Notificar a todos los clientes sobre la desconexión
        clients.forEach(client => {
            client.write('Un usuario ha abandonado el chat.\n');
        });
    });
});

server.listen(3000, () => {
    console.log('Servidor de chat escuchando en el puerto 3000');
});