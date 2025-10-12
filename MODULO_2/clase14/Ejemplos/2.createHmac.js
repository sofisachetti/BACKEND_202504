// Importar el módulo 'crypto' de Node.js
const crypto = require('crypto');

// Datos a autenticar
const data = 'Mensaje secreto';

// Clave secreta para HMAC
const secretKey = 'mi_clave_secreta';

// Crear un objeto HMAC usando el algoritmo 'sha256' y la clave secreta
const hmac = crypto.createHmac('sha256', secretKey);

// Actualizamos el HMAC con los datos
hmac.update(data);

// Obtener el HMAC en formato hexadecimal
const hmacOutPut = hmac.digest('hex');

// Leemos el HMAC generado
console.log('HMAC de sha256:', hmacOutPut);