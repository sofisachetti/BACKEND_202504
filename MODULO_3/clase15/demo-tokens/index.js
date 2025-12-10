// Importamos las dependencias necesarias
const express = require('express');     // Framework de Express para manejar rutas y servidores
const jwt = require('jsonwebtoken');    // Libreria jsonwebtoken para manejar los tokens JWT

const app = express();  // Creamos instancia de aplicacion Express
const PORT = 3000;      // Definimos el puerto 

// Clave secreta para firmar el token (en un entorno real se mantiene privado en un archivo .env)
const SECRET_KEY = "miClaveSuperSecreta";

// Middeware para validar el token
// Este middleware será ejecutado en ciertas rutas para asegurarse de que el usuario tiene un token valido.
function verifyToken(req, res, next) {
    // Obtener el token del encabezado 'Authorization' de la solicitud HTTP
    const authHeader = req.headers['authorization']; // Los tokens suelen enviarse a este encabezado

    // El token debe estar en el formato 'Bearer <token>', por lo tanto se separa el prefijo 'Bearer ' del token.
    const token = authHeader && authHeader.split(' ')[1]; // Si existe el encabezado, extrae el token

    if (!token) {
        // Si no se proporciona el token en el encabezado, devolver un error 401 (no autorizado)
        return res.status(401).json({ message: 'Token no proporcionado.' });
    }

    try {
        // Verificar el token usando la clave secreta. Si el token es valido, se decodifica.
        const decoded = jwt.verify(token, SECRET_KEY); // Esta funcion valida y decodifica el token

        // Si el token es valido, la informacion decodificada se almacena en req.user
        req.user = decoded; // Se agrega la informacion del usuario al objeto de solicitud (req)

        // Llamar al siguiente middleware o controlador si el token es valido
        next();
    } catch (err) {
        // Si el token es invalido o ha expirado, se devuelve un error 403 (prohibido)
        res.status(403).json({ message: 'Token invalido o expirado' });
    }
}

// Ruta para generar un token
// Esta ruta simula un proceso de inicio de sesion y genera un token JWT
app.get('/login', (req, res) => {
    // Información del usuario (en un caso real, se verifican las credenciales de la base de datos).
    const user = {
        id: 1, // ID unico del usuario
        name: "Juan Perez", // Nombre del usuario
        email: 'juan@example.com', // Correo del usuario
        role: 'admin', // Rol del usuario
    };

    // Creamos el token. El token se firmará con la clave secreta y expirará en una hora
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
    // jwt.sign crea un token a partir de la informacion del usuario

    // Responder al cliente con el mensaje de exito y el token generado
    res.json({
        message: 'Inicio de sesion exitoso', // Mensaje informativo
        token: token, // El token que el cliente debe almacenar y usar en futuras solicitudes
    });
});

// Ruta protegida: Solo accesible con un token valido.
// Esta ruta require que el usuario proporciones un token valido para acceder a ella.
app.get('/protected', verifyToken, (req, res) => {
    // Si el middleware verifyToken permite el acceso, respondemos con la informacion del usuario decodificado
    res.json({
        message: 'Acceso a ruta protegida concedido.', // Mensaje de acceso permitido
        user: req.user, // Informacion del usuario que fue decodificado y almacenado en req.user en el middleware 
    });
});

// Iniciar el servidor
// Este comando pone en marcha el servidor Express y lo hace escuchar en el puerto especificado.
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});