// Importar el framework Express
import express from 'express';

// Crear una instancia de la aplicacion Express
const app = express();

// Middleware para analizar el cuerpo de la solicitud en formato json
app.use(express.json());

// Base de datos ficticia para almacenar los animales
let animals = [
    { id: 1, name: 'Leon', species: 'Felino' },
    { id: 2, name: 'Elefante', species: 'Mamifero' },
    { id: 3, name: 'Delfin', species: 'Mamifero' },
];

// Middleware para registrar cada una de las solicitudes en la consola
const requestLogger = (req, res, next) => {
    console.log(`Solicitud:  ${req.method} ${req.url}`);
    next(); // Continua al siguiente middleware o endpoint
};

// Aplicamos el middleware globalmente 
app.use(requestLogger);

// Middleware para validar los datos de los animales en las solicitudes POST Y PUT
const validateAnimal = (req, res, next) => {
    const { name, species } = req.body; // Extrae los datos del cuerpo de la solicitud
    if (!name || !species) {
        return res.status(400).json({ error: "Los campos name y species son obligatorios." });
    }
    next(); // Si los datos son válidos, continua alsiguiente paso
};

// **RUTAS: Funcionalidades principales de la API**

// 1. Endpoin para obtener todos los animales (GET)
app.get('/api/animals', (req, res) => {
    // Devuelve la lista de anmales en formato JSON con un código de estado 200 (OK)
    res.status(200).json(animals);
});

// 2. Endpoint para agregar un animal (POST)
app.post('/api/animals', validateAnimal, (req, res) => {
    const { name, species } = req.body; // Extrae los datos de la solicitud
    const newAnimal = { id: animals.length + 1, name, species } // Creamos un nuevo objeto con un id unico
    animals.push(newAnimal);
    res.status(201).json(newAnimal);
});

// 3. Actualizar un animal (PUT)
app.put('/api/animals/:id', validateAnimal, (req, res) => {
    const { id } = req.params; // Obtener los datos del id del animal de los parametros de la url
    const { name, species } = req.body; // Extrae los datos de la solicitud
    const animal = animals.find(a => a.id === parseInt(id)); // Busca al animal por su id
    if (!animal) {
        return res.status(404).json({ error: 'Animal no encontrado.' });
    }
    // Actualizamos el animal encontrado
    animal.name = name;
    animal.species = species;
    res.status(200).json(animal); // Devuelve el animal actualizado con codigo 200 (OK)
});

// 4. Endpoint para eliminar un animal por su ID (DELETE)
app.delete('/api/animals/:id', (req, res) => {
    const { id } = req.params; // Obtener los datos del id del animal de los parametros de la url
    animals = animals.filter(a => a.id !== parseInt(id)); // Elimina el animal de la base de datos
    res.status(204).send();
});

// Iniciamos el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});