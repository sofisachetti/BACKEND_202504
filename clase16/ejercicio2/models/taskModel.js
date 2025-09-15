const fs = require('fs');
const path = require('path');

const rutaArchivo = path.join(__dirname, '../data/tareas.json');

function cargarTareas() {
    if (!fs.existsSync(rutaArchivo)) {
        fs.writeFileSync(rutaArchivo, JSON.stringify([]));
    }
    const data = fs.readFileSync(rutaArchivo, 'utf-8');
    return JSON.parse(data);
}

function guardarTareas(tareas) {
    fs.writeFileSync(rutaArchivo, JSON.stringify(tareas, null, 2));
}

function obtenerTodas() {
    return cargarTareas();
}

function agregar(nombre) {
    const tareas = cargarTareas();
    tareas.push({ id: Date.now(), nombre });
    guardarTareas(tareas);
}

function eliminar(id) {
    let tareas = cargarTareas();
    tareas = tareas.filter((t) => t.id !== id);
    guardarTareas(tareas);
}

module.exports = { obtenerTodas, agregar, eliminar };