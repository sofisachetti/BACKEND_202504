// Importar express
const express = require("express");

// Importamos el modelo "User"
const User = require("../models/user");

// Crear el enrutador (router) para definri las rutas de usuario
const router = express.Router();

// Crear un usuario
router.post("/", async (req, res) => {
    try { // crear un nuevo usuario con los datos del cuerpo de la solicitud
        const user = new User(req.body);

        // guardamos el usuario en el BD
        await user.save()

        // respondemos con el usuario creado
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ mensaje: "Error al crear usuario: ", error })
    }
});

// Obtener todos los usuarios en la BD
router.get("/", async (req, res) => {
    // buscamos los usuarios en la BD
    const users = await User.find();

    // Respondemos con la lista de suuarios
    res.json(users);
});

// Exportamos el router, para utilizar en el index
module.exports = router; 