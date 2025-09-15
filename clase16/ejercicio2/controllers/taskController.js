const model = require('../models/taskModel');
const view = require('../views/taskView');

function listarTareas() {
    const tareas = model.obtenerTodas();
    view.mostrarTareas(tareas);
}

function agregarTarea(nombre) {
    model.agregar(nombre);
    view.mostrarMensaje("✅ Tarea agregada con éxito.");
}

function eliminarTarea(id) {
    model.eliminar(id);
    view.mostrarMensaje("🗑️ Tarea eliminada con éxito.");
}

module.exports = { listarTareas, agregarTarea, eliminarTarea };