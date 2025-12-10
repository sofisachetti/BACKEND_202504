// Importamos el modulo
import jwt from 'jsonwebtoken'

// 1. Clave secreta para firmar el token
const secretKey = "mi_clave_super_secreta";

// 2. Definimos el payload
const payload = {
    userId: 123,            // ID unico del usuario
    role: "admin",          // Rol del usuario
    name: "Sofia",          // Nombre del usuario
    iat: Math.floor(Date.now() / 1000), // Fecha actual en segundos
    exp: Math.floor(Date.now() / 1000) + (60 * 60) // Expiracion en una hora
};

// Date.now() devuelve la fecha actual en milisegundos.
// Dividir por 1000 → lo convierte en segundos.
// Math.floor() → redondea hacia abajo (los timestamps de JWT deben ser enteros).
// suma (60 * 60) → 3600 milisegundos = 1 hora

// 3. Crear el token JWT
const token = jwt.sign(payload, secretKey, { algorithm: 'HS256' });
console.log("\nToken JWT generado: ", token);

// 4. Decodificar y verificar el token
try {
    const decoded = jwt.verify(token, secretKey);
    console.log("\nPayload decodificado: ", decoded);
} catch (error) {
    console.error("token invalido o expirado: ", error.message);
}