/* 2. Ejercicio de Empleado
Crea una clase Empleado que contenga propiedades privadas para nombre, salario, y departamento. 
Implementa métodos para cambiar el salario (que no puede ser menor a 0) 
y obtener la información del empleado. 
Si se intenta establecer un salario negativo, imprime un mensaje indicativo.
*/

export class Empleado {
    private _nombre: string;
    private _salario!: number;
    private _departamento: string;

    constructor(nombre: string, salario: number, departamento: string) {
        this._nombre = nombre;
        this.setSalario(salario);
        this._departamento = departamento;
    }

    public setSalario(salario: number): void {
        if (salario < 0) {
            console.log("El salario no puede ser negativo.");
        } else {
            this._salario = salario;
        }
    }

    public obtenerInformacion(): string {
        return `Empleado: ${this._nombre}, Salario: $${this._salario}, Departamento: ${this._departamento}`;
    }
}

// Uso
const empleado = new Empleado('Luis', 3000, 'Ventas');
console.log(empleado.obtenerInformacion());
empleado.setSalario(-500);
console.log(empleado.obtenerInformacion());
empleado.setSalario(4000);
console.log(empleado.obtenerInformacion());