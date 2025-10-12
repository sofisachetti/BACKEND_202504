function mostrarTareas(tareas) {
    if (tareas.length === 0) {
        console.log("📭 No hay tareas registradas.");
    } else {
        console.log("📋 Lista de tareas:");
        tareas.forEach((t) => {
            console.log(`- [${t.id}] ${t.nombre}`);
        });
    }
}

function mostrarMensaje(mensaje) {
    console.log(mensaje);
}

module.exports = { mostrarTareas, mostrarMensaje };