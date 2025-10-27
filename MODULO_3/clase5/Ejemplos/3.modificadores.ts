class Animal {
    // Propiedad pública (accesible desde cualquier parte)
    public nombre: string;

    // Propiedad privada (solo accesible dentro de esta clase)
    private tipoAlimento: string;

    // Propiedad protegida (accesible dentro de esta clase y clases hijas)
    protected especie: string;

    // Constructor
    constructor(nombre: string, tipoAlimento: string, especie: string) {
        this.nombre = nombre;
        this.tipoAlimento = tipoAlimento;
        this.especie = especie;
    }

    // Método público (accesible desde cualquir parte)
    public describirAnimal(): void {
        console.log(`Este es ${this.nombre}, un animal de la especie ${this.especie}`);
    }

    // Método privado (solo accesible dentro de esta clase)
    private mostrarTipoAlimento(): void {
        console.log(`${this.nombre} se alimenta de ${this.tipoAlimento}`);
    }

    // Metodo protegido (accesible dentro de esta clase y clases hijas)
    protected sonidoAnimal(): void {
        console.log(`${this.nombre} hace un sonido.`);
    }

    // Método para acceder al privado dentro de la clase
    public alimentarAnimal(): void {
        this.mostrarTipoAlimento(); // llama al metodo privado dentro de la clase
    }
}

// Clase hija
class Perro extends Animal {
    constructor(nombre: string, tipoAlimento: string) {
        super(nombre, tipoAlimento, "Canino"); // Llama al constructor de la clase base
    }

    // Metodo publico de la clase hija que accede al metodo protegido de la clase base
    public hacerSonido(): void {
        this.sonidoAnimal(); // se puede acceder porque es un metodo protegido
        console.log(`${this.nombre} está ladrando.`);
    }
}

// Creamos una instacnia de la clase Animal
const miAnimal = new Animal("Milo", "croquetas", "Felino");
miAnimal.describirAnimal(); // Funciona: propiedad y metodos publicos
miAnimal.alimentarAnimal(); // Funciona: llamo al metodo privado a traves de un metodo publico

// Crear una instancia de la clase Perro (heredada de animal)
const miPerro = new Perro("Firulais", "croquetas");
miPerro.describirAnimal(); // Funciona: hereda el metodo publico de Animal
miPerro.hacerSonido(); // Funciona: accede al metodo protegido desde la clase hija

// Errores por intentar acceder a propiedades/métodos privados o protegidos desde fuera
// console.log(miAnimal.tipoAlimento); // Error: 'tipoAlimento' es privado
// miAnimal.mostrarTipoAlimento; // Error: 'mostrarTipoAlimento' es privado
// miAnimal.sonidoAnimal(); // Error: 'sonidoAnimal' es protegido