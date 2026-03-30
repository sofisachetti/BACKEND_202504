// Importamos mongoose
const mongoose = require("mongoose");

// Definir el Schema para los documentos de la coleccion "users"
const UserSchema = new mongoose.Schema({
    // campo "nombre"de tipo String, obligatorio
    nombre: { type: String, required: true },
    // campo "email", de tipo string, obligatorio y unico
    email: { type: String, required: true, unique: true },
    // campo "edad" de tipo number, opcional
    edad: { type: Number }
});

// Exportar
module.exports = mongoose.model("User", UserSchema);