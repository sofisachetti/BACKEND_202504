// Definimos una interfaz 'Estudiante'
interface Estudiante {
    nombre: string;             // Propiedad 'nombre' es de tipo string
    edad: number;               // Propiedad 'edad' es de tipo number
    materiaFavorita: string;    // Propiedad 'materiaFavorita' es de tipo string
    promedio: number;           // Propiedad 'promedio' es de tipo number

    saludar: () => void;        // Método 'saludar' que no devuelve valor
    obtenerDetalles: () => string; // Método que devuelve una cadena de detalles del estudiante
}

// Creación de un objeto que cumple con la interfaz 'Estudiante'
const estudiante1: Estudiante = {
    nombre: "Ana",                  // Asignación del atributo 'nombre'
    edad: 21,                       // Asignación del atributo 'edad'
    materiaFavorita: "Matemática",  // Asignación del atributo 'materiaFavorita'
    promedio: 9.5,                  // Asignación del atributo 'promedio'

    // Implementación del método 'saludar'
    saludar: function() {
        console.log(`Hola, soy ${estudiante1.nombre}, tengo ${estudiante1.edad} años y mi materia favorita es ${estudiante1.materiaFavorita}`);
    },

    // Implemetación del método 'obtenerDetalles'
    obtenerDetalles: function() {
        return `Nombre: ${estudiante1.nombre}\nEdad: ${estudiante1.edad}\nMateria Favorita: ${estudiante1.materiaFavorita}\nPromedio: ${estudiante1.promedio}`
    }
};

// Uso del método 'saludar'
estudiante1.saludar(); 
// Imprime: Hola, soy Ana, tengo 21 años y mi materia favorita es Matemática

// Uso del método 'obtenerDetalles'
const detalles = estudiante1.obtenerDetalles();
console.log(detalles);
// Imprime:
// Nombre: Ana
// Edad: 21
// Materia Favorita: Matemática
// Promedio: 9.5
