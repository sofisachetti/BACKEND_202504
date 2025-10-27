// Definimos una clase 'Gato'
class Gato {
    // Propiedades
    public nombre: string;
    public edad: number;
    public raza: string;

    // Constructor
    constructor(nombre: string, edad: number, raza: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }

    // Método para obtener información del gato
    public obtenerInformación(): string {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Raza: ${this.raza}`;
    }

    // Metodo para cambiar la raza del gato
    public cambiarRaza(nuevaRaza: string): void {
        this.raza = nuevaRaza;
    }
}

// Creamos una instancia de la clase Gato
const gato = new Gato("Arturo", 2, "Europeo");

// Llamamos al metodo 'obtenerInformacion'
console.log(gato.obtenerInformación());

// Cambiamos la raza
gato.cambiarRaza('Siames');

// Llamamos de nuevo al metodo obtenerInformacion para ver los cambios
console.log(gato.obtenerInformación());

