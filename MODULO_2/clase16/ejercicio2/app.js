const readlineSync = require('readline-sync');
const controller = require('./controllers/taskController');

function mostrarMenu() {
    console.log("\n===== 📌 MENÚ DE TAREAS =====");
    console.log("1. Ver tareas");
    console.log("2. Agregar tarea");
    console.log("3. Eliminar tarea");
    console.log("4. Salir");
}

let opcion;
do {
    mostrarMenu();
    opcion = readlineSync.question("👉 Elige una opción: ");

    switch (opcion) {
        case "1":
            controller.listarTareas();
            break;
        case "2":
            const tarea = readlineSync.question("✍️ Escribe la nueva tarea: ");
            controller.agregarTarea(tarea);
            break;
        case "3":
            const id = readlineSync.questionInt("🔢 Ingresa el ID de la tarea a eliminar: ");
            controller.eliminarTarea(id);
            break;
        case "4":
            console.log("👋 Saliendo de la aplicación...");
            break;
        default:
            console.log("❌ Opción no válida. Intenta de nuevo.");
    }
} while (opcion !== "4");