// Definicion de interfaz 'Estudiante'
interface Estudiante {
    nombre: string; 
    edad: number;
    materiaFavorita: string;
    promedio: number;
    
    saludar: () => void;
    obtenerDetalle: () => string;
}

// Creacion de un objeto que cumple con la interfaz 'Estudiante'
export const estudiante1: Estudiante = {
    nombre: "Ana",
    edad: 21,
    materiaFavorita: "Matemática",
    promedio: 9.5,

    // Implementamos los métodos
    saludar: function() {
        console.log(`Hola, mi nombre es ${estudiante1.nombre}, tengo ${estudiante1.edad} años y mi materia favorita es ${estudiante1.materiaFavorita}.`);
    },

    obtenerDetalle: function() {
        return `Nombre: ${estudiante1.nombre}\nEdad: ${estudiante1.edad}\nMateria Favorita: ${estudiante1.materiaFavorita}\nPromedio: ${estudiante1.promedio}`;
    }
}

// Usar el método saludar
estudiante1.saludar();

// Usar el metodo obtenerDetalle
const detalles = estudiante1.obtenerDetalle();
console.log(detalles);
