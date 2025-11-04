// Definimos una clase Triangulo
class Triangle {
    private _base: number;
    private _height: number;

    constructor() {
        this._base = 0
        this._height = 0
    }

    // Setter para la base, con validacion
    public set base(value: number) {
        if (value > 0) {
            this._base = value;
        } else {
            console.log("La base deber ser mayor a 0.");
        }
    }

    // Setter para la altura, con validacion
    public set height(value: number) {
        if (value > 0) {
            this._height = value;
        } else {
            console.log("La altura deber ser mayor a 0.");
        }
    }

    // Metodo para calcular el area del triangulo
    public calculateArea(): number {
        return (this._base * this._height) / 2; 
    }
}

// Uso de la clase Tringle
const triangulo = new Triangle();

// Utilizamos los setters para establecer los valores
triangulo.base = 10; // Establecemos una base válida
triangulo.height = 15; 

// Calcular y mostrar el area
console.log(`Area del triangulo: ${triangulo.calculateArea()}`);

// Intentamos establecer las propiedades con numeros negativos
triangulo.base = -5;
triangulo.height = -10;
console.log(`Area con valores invalidos: ${triangulo.calculateArea()}`);
