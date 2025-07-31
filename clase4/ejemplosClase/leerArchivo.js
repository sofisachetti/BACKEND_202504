// PASO 1: Importar el modulo
const fs = require('fs');

// PASO 2: Usamos el método readFile
// 1. Primer argumento es el archivo a leer. Si el archivo no esta en el mismo directorio, hay que colocar la ruta.
// 2. Segundo argumento: la codificacion, utf-8 (unicode transformation format 8bits) que es una codificacion de caracteres que se utilizan para presentar texto en compuadoras y web.
// 3. Callback - a su vez lleva dos parametros:
// parametro A: 'err' -> un objeto de error que indica si algo salio mal durante la lectura del archivo
// parametro B: 'data' -> es el que contiene el contenido del archivo leido si es que no hubo error.

fs.readFile('archivo.txt', 'utf-8', function (err, data) {
    if (!err) {
        console.log(data);
    } else {
        throw err
    }
});