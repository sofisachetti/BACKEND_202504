/* Ejercicio 3: Sistema de Tienda en Línea
Consigna: Desarrolla un sistema para una tienda en línea. 
Crea una clase base Producto que tenga propiedades como nombre, precio, y un método detallesProducto(). 
Luego, crea dos clases derivadas: Electronico y Ropa, ambas deben sobrescribir el método detallesProducto()
con información más específica.
Crea una interfaz Envio que defina el método calcularEnvio(). 
La clase Electronico debe implementar esta interfaz y el cálculo del envío será un 10% del precio del producto.
*/

// Interfaz de Envio
interface Envio {
    calcularEnvio(): number;
}

// Clase base
class Producto {
    protected nombre: string;
    protected precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }

    detallesProducto(): void {
        console.log(`${this.nombre} tiene un precio de $${this.precio}.`);
    }
}

// Clase derivada Electronico
class Electronico extends Producto implements Envio {
    constructor(nombre: string, precio: number) {
        super(nombre, precio);
    }

    detallesProducto(): void {
        console.log(`Producto: ${this.nombre} (Electrónico) - Precio: $${this.precio}`);
    }

    calcularEnvio(): number {
        return this.precio * 0.10; // El envío es el 10% del precio
    }
}

// Clase derivada Ropa
class Ropa extends Producto {
    private talla: string;

    constructor(nombre: string, precio: number, talla: string) {
        super(nombre, precio);
        this.talla = talla;
    }

    detallesProducto(): void {
        console.log(`Producto: ${this.nombre} (Ropa) - Precio: $${this.precio} - Talla: ${this.talla}`);
    }
}

// Ejemplo de uso
const celular = new Electronico("Celular", 800);
celular.detallesProducto(); 
console.log(`Costo de envío: $${celular.calcularEnvio()}`);
// Salida:
// Producto: Celular (Electrónico) - Precio: $800
// Costo de envío: $80

const camisa = new Ropa("Camisa", 30, "M");
camisa.detallesProducto();
// Salida:
// Producto: Camisa (Ropa) - Precio: $30 - Talla: M