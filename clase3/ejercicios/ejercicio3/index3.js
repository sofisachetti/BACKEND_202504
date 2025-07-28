/*
Actividad 3: Registro de tareas pendientes
Consigna: Crea un programa para gestionar tus tareas pendientes. El programa debe permitirte:
1.	Agregar una tarea: Registrar una tarea pendiente con su descripción.
2.	Listar las tareas: Mostrar todas las tareas registradas.
3.	Eliminar una tarea: Eliminar una tarea de la lista.
Pistas:
•	Usa un archivo JSON para guardar las tareas.
•	Si el archivo no existe, comienza con un arreglo vacío.
•	Eliminar una tarea se puede hacer por su ID.
*/

const fs = require('fs');
const filePath = './tareas.json'; // Archivo donde se almacenarán las tareas

// Función para leer las tareas desde el archivo
const leerTareas = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]'); // Si no existe, crea un archivo vacío
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido); // Convertimos el contenido a un arreglo de tareas
};

// Función para escribir las tareas en el archivo
const escribirTareas = (tareas) => {
    fs.writeFileSync(filePath, JSON.stringify(tareas, null, 2)); // Escribimos las tareas en el archivo
};

// Agregar una tarea
const agregarTarea = (descripcion) => {
    const tareas = leerTareas(); // Leemos las tareas existentes
    tareas.push({ id: tareas.length + 1, descripcion }); // Agregamos la nueva tarea
    escribirTareas(tareas); // Guardamos la lista actualizada
    console.log(`Tarea agregada: "${descripcion}"`);
};

// Listar las tareas
const listarTareas = () => {
    const tareas = leerTareas(); // Leemos las tareas
    console.log('Lista de tareas pendientes:');
    tareas.forEach(tarea => {
        console.log(`${tarea.id}. ${tarea.descripcion}`);
    });
};

// Eliminar una tarea
const eliminarTarea = (idTarea) => {
    let tareas = leerTareas(); // Leemos las tareas
    tareas = tareas.filter(tarea => tarea.id !== idTarea); // Filtramos para eliminar la tarea por ID
    escribirTareas(tareas); // Guardamos la lista actualizada
    console.log(`Tarea eliminada.`);
};

// Ejemplo de uso de las funciones
agregarTarea('Hacer la compra');
listarTareas();
eliminarTarea(1);
listarTareas();