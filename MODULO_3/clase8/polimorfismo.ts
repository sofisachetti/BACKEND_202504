/* Ejercicio 1: Herencia y Polimorfismo con Clases Abstractas y Métodos
Sobrecargados
Crea una clase abstracta InstrumentoMusical con un método tocar. Crea dos
clases derivadas Guitarra y Piano, que sobrescriban este método para tocar el
instrumento de manera diferente. Además, agrega una sobrecarga del método
tocar en la clase base para permitir tocar con o sin acompañamiento.
*/

// Definimos la clase abstracta
export abstract class InstrumentoMusical {
    // definir los metodos abstractos
    // abstract tocar(): void; 
    abstract tocar(conAcompaniamiento?: boolean): void;
}

// Definimos las sub clases
class Guitarra extends InstrumentoMusical {
    // sobreescritura del metodo tocar
    //tocar(): void;
    //tocar(conAcompaniamiento: boolean): void;
    tocar(conAcompaniamiento?: boolean): void {
        if (conAcompaniamiento) {
            console.log('Tocando la guitarra con acompañamiento.');
        } else {
            console.log('Tocando la guitarra sin acompañamiento.');
        }
    }
}

class Piano extends InstrumentoMusical {
    //tocar(): void;
    //tocar(conAcompaniamiento: boolean): void;
    tocar(conAcompaniamiento?: boolean): void {
        if (conAcompaniamiento) {
            console.log('Tocando el piano con acompañamiento.');
        } else {
            console.log('Tocando el piano sin acompañamiento.');
        }
    }
}

// Ejemplos de uso
const guitarra = new Guitarra();
guitarra.tocar();
guitarra.tocar(true);

const piano = new Piano();
piano.tocar();
piano.tocar(true);
piano.tocar(false);