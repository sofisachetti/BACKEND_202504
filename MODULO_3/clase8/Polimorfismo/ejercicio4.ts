/* Ejercicio 4: Polimorfismo y Sobreescritura Compleja con Interacción entre Clases
Crea una clase Cliente que pueda asociarse a una CuentaBancaria. 
Crea diferentes tipos de clientes, como ClienteVIP que tiene beneficios adicionales.
Cada tipo de cliente puede realizar depósitos y retiros, pero los clientes VIP pueden retirar sin comisiones.
*/

// Clase: Cliente
export class Cliente {
    protected cuenta: CuentaBancaria;

    constructor(cuenta: CuentaBancaria) {
        this.cuenta = cuenta;
    }

    depositar(cantidad: number): void {
        this.cuenta.depositar(cantidad);
    }

    retirar(cantidad: number): void {
        this.cuenta.retirar(cantidad);
    }
}

// Subclase: ClienteVIP
class ClienteVIP extends Cliente {
    retirar(cantidad: number): void {
        // Los clientes VIP pueden retirar sin límite de saldo
        if (cantidad > 0) {
            console.log(`Cliente VIP retirando ${cantidad} sin comisiones.`);
            this.cuenta.retirar(cantidad);
        }
    }
}

// Pruebas
const cuentaNormal = new CuentaBancaria(5000);
const clienteNormal = new Cliente(cuentaNormal);
clienteNormal.depositar(1000);  // Salida: Depositaste 1000. Saldo actual: 6000
clienteNormal.retirar(2000);    // Salida: Retiraste 2000. Saldo actual: 4000

const cuentaVIP = new CuentaBancaria(10000);
const clienteVIP = new ClienteVIP(cuentaVIP);
clienteVIP.retirar(5000);       // Salida: Cliente VIP retirando 5000 sin comisiones. Retiraste 5000. Saldo actual: 5000