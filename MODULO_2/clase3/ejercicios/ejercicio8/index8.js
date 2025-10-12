/*
Actividad 8: Seguimiento de proyectos
Consigna: Crea un programa para gestionar proyectos. El programa debe permitirte:
1.	Agregar un proyecto: Registrar un proyecto con su nombre y estado (pendiente o en progreso).
2.	Listar los proyectos: Mostrar todos los proyectos registrados.
3.	Actualizar el estado de un proyecto: Cambiar el estado de un proyecto a "finalizado" o "en progreso".
Pistas:
•	Usa un archivo JSON para guardar los proyectos.
•	Si el archivo no existe, comienza con un arreglo vacío.
•	Cada proyecto debe tener un ID único.
*/

const fs = require('fs');
const filePath = './proyectos.json'; // Archivo donde se almacenarán los proyectos

// Función para leer los proyectos desde el archivo
const leerProyectos = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]'); // Si no existe, crea un archivo vacío
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido); // Convertimos el contenido a un arreglo de proyectos
};

// Función para escribir los proyectos en el archivo
const escribirProyectos = (proyectos) => {
    fs.writeFileSync(filePath, JSON.stringify(proyectos, null, 2)); // Escribimos los proyectos en el archivo
};

// Agregar un proyecto
const agregarProyecto = (nombre, estado) => {
    const proyectos = leerProyectos(); // Leemos los proyectos existentes
    proyectos.push({ id: proyectos.length + 1, nombre, estado }); // Agregamos el nuevo proyecto
    escribirProyectos(proyectos); // Guardamos la lista actualizada
    console.log(`Proyecto agregado: ${nombre}, estado: ${estado}`);
};

// Listar los proyectos
const listarProyectos = () => {
    const proyectos = leerProyectos(); // Leemos los proyectos
    console.log('Lista de proyectos:');
    proyectos.forEach(proyecto => {
        console.log(`${proyecto.id}. ${proyecto.nombre} - Estado: ${proyecto.estado}`);
    });
};

// Actualizar el estado de un proyecto
const actualizarEstado = (idProyecto, nuevoEstado) => {
    const proyectos = leerProyectos(); // Leemos los proyectos
    const proyecto = proyectos.find(p => p.id === idProyecto); // Buscamos el proyecto por ID
    if (proyecto) {
        proyecto.estado = nuevoEstado; // Actualizamos el estado
        escribirProyectos(proyectos); // Guardamos la lista actualizada
        console.log(`Proyecto actualizado: ${proyecto.nombre}, nuevo estado: ${proyecto.estado}`);
    } else {
        console.log('Proyecto no encontrado.');
    }
};

// Ejemplo de uso de las funciones
agregarProyecto('Desarrollo Web', 'En progreso');
listarProyectos();
actualizarEstado(1, 'Finalizado');
listarProyectos();