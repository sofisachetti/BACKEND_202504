// Ejemplo para escribir archivos utilizando el modulo FS

// PASO 1: importar el modulo
const fs = require('fs');

// PASO 2: configuramos una variable de nombre 'datos' que contiene los datos a persistir
const datos = "Ejemplo de datos que podemos escribir en un archivo."

// PASO 3: Utilizamos el modulo fs 'writeFile' que nos permita escribir datos e un archivo de texto
// 1. Primer parametro: writeFile va a crear el archivo por nosotras, el nombre de dicho archivo lo pasamos como primer parámetro. 
// 2. Segudno parametro es donde guardamos los datos, en este caso es una constante.
// 3. Tercer parametro hace referencia a que hacer si ocurre algun error. En el caso de error, va a dar lugar a que se lance el mensaje correspondiente.

fs.writeFile('archivo.txt', datos, function(err) {
    if (!err) {
        console.log('Los datos han sido escritos en archivo.txt');
    } else {
        throw err
    }
});