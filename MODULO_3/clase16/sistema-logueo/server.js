// Importaciones
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');

// Inicializar express
const app = express();
app.use(express.json());

// Definir el puerto
const PORT = 3000;

// Ruta al archivo que simula la BD
const databasePath = './database.json';

// Cargar las variables de entorno
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY || 'sofi';

// Ruta base para confirmar que el servidor esta funcionando
app.get('/', (req, res) => {
    res.send('Bienvennida al sistema de logueo.');
});

// Ruta para registrar nuevos usuarios
app.post('/register', async (req, res) => {
    const { email, password } = req.body; // Desestructuramos los datos que ingresan en el cuerpo de la solicitud
    
    // Condicional para verficar que los campos no esten vacios
    if (!email || !password) {
        return res.status(400).json({ error: 'El usuario no ingresó los campos requeridos.' });
    }

    // Leer la BD para verificar que el usuario existe
    const database = JSON.parse(fs.readFileSync(databasePath));
    const userExists = database.find((user) => user.email === email);
    if (userExists) {
        return res.status(400).json({ error: 'El usuario ya está registrado' });
    }

    // Hashing de la contraseña. El numero 10 es el coste del algoritmo (el salting)
    const hashedPassword = await bcrypt.hash(password, 10);

    // creamos el nuevo usuario
    const newUser = { id: Date.now(), email, password: hashedPassword };

    // Guardarlo
    database.push(newUser);
    fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));

    // Enviar una respuesta al cliente
    res.status(201).json({ message: 'Usuario registrado con exito.' });
});

// Ruta para iniciar sesion
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Condicional para verificar que los campos no esten vacios
    if (!email || !password) {
        return res.status(400).json({ error: 'El usuario no ingresó los campos requeridos.' });
    }

    // Leemos la base de datos para buscar al usuario
    const database = JSON.parse(fs.readFileSync(databasePath));
    const user = database.find((user) => user.email === email);
    if (!user) {
        return res.status(400).json({ error: 'Usuario no encontrado.' });
    }

    // Comparamos la contraseña (ingresada y hasheada)
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ error: 'Contraseña incorrecta.' });
    }

    // Generamos un JWT
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
        expiresIn: '1h',
    });

    res.json({ message: 'Inicio de sesion exitoso!', token });
});

// Middleware para verificar el token
function autenticacionToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // extraemos el token

    // Condicional para verficiar que el token existe
    if (!token) {
        return res.status(401).json({ error: 'Token no proporcionado.' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Token invalido' });
        }

        req.user = user // Guardamos los datos en el usuario
        next();
    });
}

// Ruta protegida
app.get('/profile', autenticacionToken, (req, res) => {
    res.json({ message: `Bienvenida ${req.user.email}`, user: req.user });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});