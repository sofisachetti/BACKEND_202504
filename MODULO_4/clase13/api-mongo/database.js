// Importamos el modulo mongoose, para interactuar con MongoDB
const mongoose = require('mongoose');

// Modulo dotenv para leer las variables de entorno desde el .env
require("dotenv").config();

// definimos una funcion asincrona que se encarga de conectar la app con MongoDB
const connectDB = async () => {
    // Intentamos establecer la conexxion con la BD usando mongoose
    try {
        await mongoose.connect(process.env.MONGO_URI);

        // Si la conexion es exitosa, mostramos un mensaje
        console.log("Concetado a MongoDB.");
    } catch (error) {
        // Si ocurre un error, lo capturamos y lo mostramos en consola
        console.error("Error de conexion a MongoDB: ", error);

        // Terminamos el proceso de node.js con un codigo de error
        process.exit(1);
    }
}

// Exportamos la funcion para poder usarla en otros archivos de nuestra app
module.exports = connectDB;



