/* Ejercicio 2: Sistema de Reserva de Hotel
Consigna: Crea un sistema para gestionar las reservas de un hotel. 
Define una clase base Cliente con propiedades privadas como nombre, numeroHabitacion, y un método reservar(). 
Luego, crea dos clases derivadas ClientePremium y ClienteCorporativo que sobrescriban el método reservar()
para añadir funcionalidades adicionales.
Adicionalmente, crea una interfaz Beneficios con un método accederBeneficios(). 
Ambas clases derivadas deben implementar esta interfaz. 
En la clase ClientePremium, el cliente podrá acceder al spa y desayuno gratis, 
y en la clase ClienteCorporativo, el cliente podrá acceder a salas de reuniones y descuentos.
*/

// Interfaz de Beneficios
interface Beneficios {
    accederBeneficios(): void;
}

// Clase base
class Cliente {
    private nombre: string;
    private numeroHabitacion: number;

    constructor(nombre: string, numeroHabitacion: number) {
        this.nombre = nombre;
        this.numeroHabitacion = numeroHabitacion;
    }

    reservar(): void {
        console.log(`${this.nombre} ha reservado la habitación número ${this.numeroHabitacion}.`);
    }

    // Método público para acceder al nombre
    obtenerNombre(): string {
        return this.nombre;
    }
}

// Clase derivada ClientePremium
class ClientePremium extends Cliente implements Beneficios {
    constructor(nombre: string, numeroHabitacion: number) {
        super(nombre, numeroHabitacion);
    }

    reservar(): void {
        super.reservar(); // Llama al método de la clase base
        console.log("Como cliente premium, tienes acceso al spa y desayuno gratis.");
    }

    accederBeneficios(): void {
        console.log("Accediendo a los beneficios: Spa y desayuno gratis.");
    }
}

// Clase derivada ClienteCorporativo
class ClienteCorporativo extends Cliente implements Beneficios {
    constructor(nombre: string, numeroHabitacion: number) {
        super(nombre, numeroHabitacion);
    }

    reservar(): void {
        super.reservar(); // Llama al método de la clase base
        console.log("Como cliente corporativo, tienes acceso a las salas de reuniones y descuentos.");
    }

    accederBeneficios(): void {
        console.log("Accediendo a los beneficios: Salas de reuniones y descuentos.");
    }
}

// Ejemplo de uso
const cliente1 = new ClientePremium("Ana", 101);
cliente1.reservar(); 
cliente1.accederBeneficios(); 
// Salida:
// Ana ha reservado la habitación número 101.
// Como cliente premium, tienes acceso al spa y desayuno gratis.
// Accediendo a los beneficios: Spa y desayuno gratis.

const cliente2 = new ClienteCorporativo("Luis", 102);
cliente2.reservar(); 
cliente2.accederBeneficios(); 
// Salida:
// Luis ha reservado la habitación número 102.
// Como cliente corporativo, tienes acceso a las salas de reuniones y descuentos.
// Accediendo a los beneficios: Salas de reuniones y descuentos.