/*
Actividad 7: Control de tareas diarias
Consigna: Crea un programa para gestionar tus tareas diarias. El programa debe permitirte:
1.	Agregar una tarea diaria: Registrar una nueva tarea con su descripción y estado.
2.	Listar las tareas diarias: Mostrar todas las tareas con su estado.
3.	Marcar una tarea como completada: Cambiar el estado de una tarea de "pendiente" a "completada".
Pistas:
•	Usa un archivo JSON para guardar las tareas.
•	El estado de cada tarea puede ser "pendiente" o "completada".
•	Si el archivo no existe, comienza con un arreglo vacío.
*/

const fs = require('fs');
const filePath = './tareasDiarias.json'; // Archivo donde se almacenarán las tareas

// Función para leer las tareas desde el archivo
const leerTareasDiarias = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]'); // Si no existe, crea un archivo vacío
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido); // Convertimos el contenido a un arreglo de tareas
};

// Función para escribir las tareas en el archivo
const escribirTareasDiarias = (tareas) => {
    fs.writeFileSync(filePath, JSON.stringify(tareas, null, 2)); // Escribimos las tareas en el archivo
};

// Agregar una tarea
const agregarTareaDiaria = (descripcion) => {
    const tareas = leerTareasDiarias(); // Leemos las tareas existentes
    tareas.push({ id: tareas.length + 1, descripcion, estado: 'pendiente' }); // Agregamos la nueva tarea con estado "pendiente"
    escribirTareasDiarias(tareas); // Guardamos la lista actualizada
    console.log(`Tarea agregada: "${descripcion}"`);
};

// Listar las tareas
const listarTareasDiarias = () => {
    const tareas = leerTareasDiarias(); // Leemos las tareas
    console.log('Lista de tareas diarias:');
    tareas.forEach(tarea => {
        console.log(`${tarea.id}. ${tarea.descripcion} - Estado: ${tarea.estado}`);
    });
};

// Marcar una tarea como completada
const completarTareaDiaria = (idTarea) => {
    const tareas = leerTareasDiarias(); // Leemos las tareas
    const tarea = tareas.find(t => t.id === idTarea); // Buscamos la tarea por ID
    if (tarea) {
        tarea.estado = 'completada'; // Cambiamos el estado a "completada"
        escribirTareasDiarias(tareas); // Guardamos la lista actualizada
        console.log(`Tarea completada: "${tarea.descripcion}"`);
    } else {
        console.log('Tarea no encontrada.');
    }
};

// Ejemplo de uso de las funciones
agregarTareaDiaria('Estudiar Node.js');
listarTareasDiarias();
completarTareaDiaria(1);
listarTareasDiarias();