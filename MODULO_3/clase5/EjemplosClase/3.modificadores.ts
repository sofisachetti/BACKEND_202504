// Definmos una clase Animal
export class Animal {
    public nombre: string; // prop. publica (accesibles desde cualquier parte)
    private tipoAlimento: string; // prop. privada (solo accesible dentro de la clase)
    protected especie: string; // prop. protegida (accesible dentro de esta clase y clases que heredan)

    // constructor
    constructor(nombre: string, tipoAlimento: string, especie:string) {
        this.nombre = nombre;
        this.tipoAlimento = tipoAlimento;
        this.especie = especie;
    }

    // Metodo publico 
    public describirAnimal(): void {
        console.log(`Este es ${this.nombre}, un animal de la especie ${this.especie}`);
    }

    // Metodo privado
    private mostrarTipoAlimento(): void {
        console.log(`${this.nombre} se alimenta de ${this.tipoAlimento}`);
    }

    // Metodo protegido
    protected sonidoAnimal(): void {
        console.log(`${this.nombre} está haciendo un sonido.`);
    }

    // Metodo para acceder al privado dentro de la clase
    public alimentarAnimal(): void {
        this.mostrarTipoAlimento();  // llamo al metodo privado dentro de la clase
    }
}

// Clase hija
class Perro extends Animal {
    constructor(nombre: string, tipoAlimento: string) {
        super(nombre, tipoAlimento, "Canino") // llamo al contructor de Animal
    }

    // Metodo publico de la clase hija que va a acceder
    public hacerSonido(): void {
        this.sonidoAnimal();
        console.log(`${this.nombre} está ladrando.`)
    }
}

// crear una instancia de Animal
const miAnimal = new Animal("Michi", "pollo", "Felino");
miAnimal.describirAnimal();
miAnimal.alimentarAnimal();

console.log('------------------------');

// crear una instancia de la clase Perro
const miPerro = new Perro("Firulais", "croquetas");
miPerro.describirAnimal();
miPerro.hacerSonido();
miPerro.alimentarAnimal();