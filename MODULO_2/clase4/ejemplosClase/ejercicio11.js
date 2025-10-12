/*Ejercicio 11: Sistema de gestión de contactos

Consigna:
Imagina que estás desarrollando una miniaplicación para gestionar
contactos. Tu objetivo es:
1. Crear un archivo llamado contactos.json que almacene una lista de
contactos.
2. Implementar funciones para:
o Agregar un contacto: Cada contacto debe tener nombre,
teléfono y email.
o Listar todos los contactos.
o Buscar un contacto por nombre.
3. Asegúrate de que los contactos no se repitan (valida el nombre
antes de agregarlo).
Pista: Usa readFile para obtener la lista actual de contactos y writeFile
para guardar cambios.
*/

const fs = require('fs');

// Fucnion para leer el archivo de contactos
function leerContactos() {
    if (fs.existsSync('contactos.json')) {
        const data = fs.readFileSync('contactos.json', 'utf-8');
        return JSON.parse(data);
    }
    return []; // Si no existe el archivo, devolvemos una lista vacia
};

// Funcion para guardar contactos en el archivo
function guardarContactos(contacto) {
    fs.writeFileSync('contactos.json', JSON.stringify(contacto, null, 2));
};

// Funcion de agregar un contacto 
function agregarContacto(nombre, telefono, mail) {
    const contactos = leerContactos();

    // Verificamos si existe un contacto con ese nombre
    if (contactos.some(contacto => contacto.nombre === nombre)) {
        console.log(`El contacto "${nombre}" ya existe.`);
        return;
    }

    contactos.push({ nombre, telefono, mail });
    guardarContactos(contactos);
    console.log(`Contacto "${nombre}" agregado con exito!`);
};

function listarContactos() {
    const contactos = leerContactos();
    console.log("Lista de contactos: ");
    console.table(contactos);
};

// buscar contacto por nombre
function buscarContacto(nombre) {
    const contactos = leerContactos();
    const contacto = contactos.find(c => c.nombre === nombre);

    if (contacto) {
        console.log("Contacto encontrado: ", contacto);
    } else {
        console.log(`No se encontró ningun contacto con el nombre "${nombre}"`);
    }
};

// pruebas de funciones
agregarContacto("Ana Maria", "123-456-789", "ana@mail.com");
agregarContacto("Juan Carlos", "123-456-789", "juan@mail.com");
listarContactos();
buscarContacto("Ana");