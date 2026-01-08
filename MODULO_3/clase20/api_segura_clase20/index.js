// 1. Importaciones
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { z } = require('zod');
require('dotenv').config();

// Paso 2: Instancia de express
const app = express();
app.use(cors());
app.use(express.json());

// Middleware global 
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Datos simulados
const user = { email: 'ada@lovelace.com', password: '1234' };
const productos = [];

// Middleware para proteccion de rutas con JWT
function auth(req, res, next) {
    const authHeader = req.headers.authorization; // Leemos el encabezado 'authorization' que es donde debe venir almacenado el token
    if(!authHeader) return res.status(401).json({ error: 'Token requerido.' });
    // Si no se proporciona el token, devuelve error

    const token = authHeader.split(' ')[1]; // Dividir el token y tomar la segunda parte (payload)
    if (!token) return res.status(401).json({ error: 'Token requerido.' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Decodificamos los datps del payload y los guardamos
        next();
    } catch {
        res.status(403).json({ error: 'Token invalido.'});
    }
};

// Esquema de Zod para validar el ingreso de productos
const productosSchema = z.object({
    name: z.string().min(2), //
    price: z.number().positive()
});

// Ruta para login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Verificamos que las credenciales sean correctas
    if (email === user.email && password === user.password) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Credenciales invalidas.' });
    }
});

// Ruta protegida para obtener todos los productos
app.get('/productos', auth, (req, res) => {
    res.json(productos);
});

// Ruta protegida para crear productos
app.post('/productos', auth, (req, res) => {
    try {
        const nuevoProducto = productosSchema.parse(req.body);
        productos.push(nuevoProducto);
        res.status(201).json(nuevoProducto);
    } catch (err) {
        res.status(400).json({ error: err.errors });
    }
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});