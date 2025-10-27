// Definir la clase Gato
export class Gato {
    // propiedades
    public nombre: string;
    public edad: number;
    private raza: string;

    // Constructor
    constructor(nombre: string, edad: number, raza: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }

    // Metodo para informacion del gato
    public obtenerInformacion(): string {
        return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nRaza: ${this.raza}`;
    }

    // Metodo para cambiar la raza del gato
    public cambiarRaza(nuevaRaza: string): void {
        this.raza = nuevaRaza;
    }
}

// Intanciamos la clase Gato
const arturo = new Gato("Arturo", 2, "Siames");

// Llamamos al metodo obtenerInformacion
console.log(arturo.obtenerInformacion());

console.log("-------------------");


// Utilizo metodo cambiarRaza
arturo.cambiarRaza("Europeo");
console.log(arturo.obtenerInformacion());
