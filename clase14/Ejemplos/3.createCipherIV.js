// Importamos modulo 'crypto' de Node.js
const crypto = require('crypto');

const algoritmo = 'aes-256-cbc'; // algoritmo de cifrado AES con un tamaño de 256 bits 
const key = crypto.randomBytes(32); // genera una clave de 265(bits) -> 32 bytes
const iv = crypto.randomBytes(16); // genera un vector de inicializacion de 16 bytes

// Creamos el objeto cipher 
const cipher = crypto.createCipheriv(algoritmo, key, iv);

// Datos a autenticar
const data = 'mensaje secreto';

// Ciframos los datos
let encriptado = cipher.update(data, 'utf8', 'hex');

// Procesa el texto plano y lo cifra
encriptado += cipher.final('hex'); // finaliza el cifrado

// Mostramos el texto cifrado
console.log('Texto cifrado: ', encriptado);

// Crear objeto decipher 
const decipher = crypto.createDecipheriv(algoritmo, key, iv);

// Deciframos los datos
let decifrado = decipher.update(encriptado, 'hex', 'utf8');
decifrado += decipher.final('utf-8');

// Mostramos el texo decifrado
console.log('Texto decifrado: ', decifrado);