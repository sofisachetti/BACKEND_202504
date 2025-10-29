// HERENCIA

// Clase padre / super clase / clase base
export class Animal {
    name: string; // propiedad que almacena el nombre del animal

    constructor (name:string) { // constructor que inicializa la propiedad name
        this.name = name
    }

    // Metodo que imprime un sonido base de un animal
    makeSound(): void { 
        console.log(`${this.name} hace un sonido`);
    }
}

// Clase hija / subclase / clase derivada
class Dog extends Animal {
    raza: string // nueva propiedad para la clase dog, que almacena la raza

    constructor(name: string, raza:string) {
        super(name) // llama al constructor de la clase animal para inicializar name
        this.raza = raza // inicializa la nueva propiedad
    }

    // sobrescritura de metodo de clase padre
    makeSound(): void {
        console.log(`${this.name} ladra`); // cambia al sonido especifico de un perro
    }

    // nuevo metodo especifico de la subclase
    juego(): void {
        console.log(`${this.name} esta buscando la pelota`);
    }
}

// Instanciar:
const genericAnimal = new Animal('Animal')
genericAnimal.makeSound()

const myDog = new Dog('Blaki', 'caniche')
myDog.makeSound()
myDog.juego()