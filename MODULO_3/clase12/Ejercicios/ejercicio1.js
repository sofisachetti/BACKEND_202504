/* Ejercicio 1: Creando un Endpoint GET para listar usuarios
Consigna: Imagina que tienes una aplicación que necesita mostrar una lista de usuarios. 
Tu tarea es crear un endpoint GET en Express que responda con un listado de usuarios en formato JSON. 
Cada usuario debe tener un nombre (name) y un correo electrónico (email).
Utiliza el método res.json() para enviar la respuesta. 
Asegúrate de que el servidor funcione correctamente en el puerto 3000 y de imprimir un mensaje en la consola al iniciarlo
*/

// Importamos el módulo Express
const express = require('express');
const app = express();

// Creamos un array con la lista de usuarios
const users = [
    { name: 'Ada Lovelace', email: 'ada@example.com' },
    { name: 'Grace Hopper', email: 'grace@example.com' }
];

// Definimos el endpoint GET que devuelve la lista de usuarios
app.get('/users', (req, res) => {
    // Enviamos la lista de usuarios en formato JSON con un código de estado 200
    res.status(200).json(users);
});

// Iniciamos el servidor y escuchamos en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000/users');
});