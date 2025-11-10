/* Ejercicio 1: Comparación Completa - Sistema de Transporte Público
Diseña un sistema que combine interfaces y clases abstractas para gestionar un transporte público.
• Crea una clase abstracta Transporte con un método abstracto mover().
• Define dos interfaces:
o Electrico con el método cargarBateria().
o Combustible con el método llenarTanque().
• Implementa dos clases:
o AutobusElectrico: Extiende de Transporte e implementa Electrico.
o Taxi: Extiende de Transporte e implementa Combustible.
*/

// Primero: definimos las interfaces
interface Electrico {
    cargarBateria(): void;
}

interface Combustible {
    llenarTanque(): void;
}

// Definimos la clase abstracta
export abstract class Transporte {
    constructor(protected pasajeros: number) {}

    // Metdo abstracto que van a heredar las subclases
    abstract mover(): void;

    // Metodo para describir el transporte que tenemos
    describir(): void {
        console.log(`Este transporte lleva ${this.pasajeros} pasajeros.`);
    }
}

// Definimos la clase autobusElectrico
class AutobusElectrico extends Transporte implements Electrico {
    mover(): void {
        console.log("El autobus electrico se mueve por la ciudad.");
    }

    cargarBateria(): void {
        console.log("Cargando la batería del autobus...");
    }
}

// Definimos clase Taxi
class Taxi extends Transporte implements Combustible {
    mover(): void {
        console.log("El taxi se mueve por la ciudad.");
    }

    llenarTanque(): void {
        console.log("Llenando el tanque del taxi...");
    }
}

// Hacemos pruebas instanciando las bases
const autobus = new AutobusElectrico(30);
autobus.describir();
autobus.cargarBateria();
autobus.mover();

console.log("------------------");

const taxi = new Taxi(3);
taxi.describir();
taxi.llenarTanque();
taxi.mover();
