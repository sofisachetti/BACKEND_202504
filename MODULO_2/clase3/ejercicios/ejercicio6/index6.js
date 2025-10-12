/*
Actividad 6: Gestión de un diario personal
Consigna: Crea un programa que te permita gestionar un diario personal. El programa debe permitirte:
1.	Agregar una entrada al diario: Registrar una nueva entrada con la fecha y el texto.
2.	Listar las entradas: Mostrar todas las entradas registradas.
3.	Eliminar una entrada: Eliminar una entrada específica por su ID.
Pistas:
•	Usa un archivo JSON para guardar las entradas del diario.
•	Cada entrada tendrá una fecha y un texto.
•	Si el archivo no existe, comienza con un arreglo vacío.
*/

const fs = require('fs');
const filePath = './diario.json'; // Archivo donde se almacenarán las entradas

// Función para leer las entradas desde el archivo
const leerEntradas = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]'); // Si no existe, crea un archivo vacío
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido); // Convertimos el contenido a un arreglo de entradas
};

// Función para escribir las entradas en el archivo
const escribirEntradas = (entradas) => {
    fs.writeFileSync(filePath, JSON.stringify(entradas, null, 2)); // Escribimos las entradas en el archivo
};

// Agregar una entrada
const agregarEntrada = (texto) => {
    const entradas = leerEntradas(); // Leemos las entradas existentes
    const fecha = new Date().toLocaleDateString(); // Obtenemos la fecha actual
    entradas.push({ id: entradas.length + 1, fecha, texto }); // Agregamos la nueva entrada
    escribirEntradas(entradas); // Guardamos la lista actualizada
    console.log(`Entrada agregada: "${texto}"`);
};

// Listar las entradas
const listarEntradas = () => {
    const entradas = leerEntradas(); // Leemos las entradas
    console.log('Entradas del diario:');
    entradas.forEach(entrada => {
        console.log(`${entrada.id}. ${entrada.fecha}: ${entrada.texto}`);
    });
};

// Eliminar una entrada
const eliminarEntrada = (idEntrada) => {
    let entradas = leerEntradas(); // Leemos las entradas
    entradas = entradas.filter(entrada => entrada.id !== idEntrada); // Filtramos para eliminar la entrada por ID
    escribirEntradas(entradas); // Guardamos la lista actualizada
    console.log(`Entrada eliminada.`);
};

// Ejemplo de uso de las funciones
agregarEntrada('Hoy fue un día excelente, aprendí mucho sobre Node.js.');
listarEntradas();
eliminarEntrada(1);
listarEntradas();