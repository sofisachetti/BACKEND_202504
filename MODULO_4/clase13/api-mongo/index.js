// Importar Express
const express = require("express");

// Importamos la funcion connectDB para conectar con MongoDB
const connectDB = require("./database");

// Importamos dotenv
require("dotenv").config();

// Importamos las rutas
const userRoutes = require("./routes/userRoutes");

// Crear una instancia de express
const app = express();

// Definimos el puerto
const PORT = process.env.PORT || 3000;

// Llamamos a la conexion para la BD
connectDB();

// Middleware de express
app.use(express.json());

// Definimos una ruta de prueba en la raiz que responde con un mensaje cuando elusuario accede a la API
app.get("/", (req, res) => {
    res.send("API funcionando.")
});

// Definir la ruta de usuarios
app.use("/api/usuarios", userRoutes);

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});