/* Consigna:
Crea un servidor TCP que requiera que los clientes se autentiquen antes de poder enviar mensajes. 
El servidor debe solicitar un nombre de usuario y una contraseña. 
Si las credenciales son correctas, el servidor debe permitir que el cliente envíe mensajes. Si no, debe cerrar la conexión.
Requisitos:
•	Usa el evento data para recibir las credenciales y validarlas.
•	Usa el método socket.write() para solicitar credenciales y enviar mensajes de éxito/error.
•	Usa el método socket.end() para cerrar la conexión si las credenciales son incorrectas.
*/

const net = require('net');

const server = net.createServer((socket) => {
    console.log('Cliente conectado.');

    let authenticated = false;

    socket.write('Por favor, ingresa tu nombre de usuario:\n');

    socket.on('data', (data) => {
        if (!authenticated) {
            const input = data.toString().trim();
            if (input === 'usuario:contraseña') { // Credenciales simples
                authenticated = true;
                socket.write('Autenticación exitosa. Puedes enviar mensajes.\n');
            } else {
                socket.write('Credenciales incorrectas. Cerrando conexión...\n');
                socket.end();
            }
        } else {
            const message = data.toString().trim();
            socket.write(`Mensaje recibido: ${message}\n`);
        }
    });

    socket.on('end', () => {
        console.log('Cliente desconectado.');
    });
});

server.listen(3000, () => {
    console.log('Servidor de autenticación escuchando en el puerto 3000');
});