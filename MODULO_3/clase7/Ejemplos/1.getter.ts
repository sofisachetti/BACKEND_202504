import { RECTANGLE_NAME } from "../../clase3/Ejemplos/4.TiposExp";

// definicion de una clase Rectangulo
class Rectangle {
    private _width: number;     // propiedad privada
    private _height: number;    // propiedad privada

    constructor(width: number, height: number) {
        this._width =  width;
        this._height = height;
    }

    // Getter para el area del rectangulo
    public get area(): number {
        return this._width * this._height
    }

    // Getter para obtener la altura
    public get height(): number {
        return this._height;
    }

    // Getter para obtener el ancho
    get widht(): number {
        return this._width;
    }
}

// Hacemos uso de la clase
const rectangulo = new Rectangle(10, 5);

// Accedemos a los valores
console.log(`Ancho del rectangulo: ${rectangulo.widht}`);
console.log(`Altura del rectangulo: ${rectangulo.height}`);
console.log(`Area del rectangulo: ${rectangulo.area}`);

// rectangulo._width = 20 // Error: Property '_width' is private and only accessible within class 'Rectangle'.
// rectangulo.height = 15 // Error: Cannot assign to 'height' because it is a read-only property.