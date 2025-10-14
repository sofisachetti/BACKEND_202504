// 1. any: Permite almacenar cualquier tipo de valor sin restricciones.
let anyValue: any = "Hola, soy un valor any"; // Lo inicializamos como un string (cadena)
console.log(anyValue); // Salida: Hola, soy un valor any

anyValue = 42; // Ahora pasa a ser tipo number
console.log(anyValue); // Salida: 42

anyValue = { name: "TypeScript" }; // Ahora paso a ser un objeto
console.log(anyValue); // Salida: { name: TypeScript }

console.log("\n----------------------\n");

// 2. unknown: Similar a `any`, pero requiere verificación de tipo antes de su uso
let unknownValue: unknown = "Hola, soy unknown.";
console.log(unknownValue); // Salida: Hola, soy unknown
// console.log(unknownValue.toUpperCase()); --> no puedo usarlo de esta forma porque sale error: 'unknownValue' is of type 'unknown'.

// Neceitamos verificar el tipo antes de usarlo como string
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase()); // Salida: HOLA, SOY UNKNOWN.
}

console.log("\n----------------------\n");

// 3. void: Se usa en funciones que no retornan valor.
function logMessage(message: string): void {
    console.log(message);
}

logMessage("Esto es una funcion void"); // Salida: Esto es una función void

console.log("\n----------------------\n");

// 4. never: Representa el tipo de funciones que nunca retornan, 
// como aquellas que arrejan errores o tienen bucles infinitos
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

// throw new Error es una expresión en JavaScript (y por consiguiente de TypeScript)
// que se utiliza para lanzar una excepción.
// Esta excepción interrumpe la ejecución normal del programa y se propaga hacia arriba en la pila
// de llamadas hasta que sea manejada (usualmente mediante un bloque try-catch).

// Descomentar esto arrojará un error y detendrá el programa
// throwError("Esto es un error y nunca retorna.");

function infiniteLoop(): never {
    while (true) {
        console.log("Este bucle nunca termina");
    }
}

// Descomentar esto para ver el bucle infinito. 
// Para cerrarlo presiona en tu teclado ctrl + c
// infiniteLoop();

console.log("\n----------------------\n");

// `null` y `undefined`: Representan la ausencia de valor
let nullableValue: string | null = null; // El valor puede ser una cadena o null
console.log(nullableValue); // Salida: null

nullableValue = "Ahora tiene un valor";
console.log(nullableValue); // Salida: Ahora tiene un valor

let undefinedVaue: undefined = undefined; // Sólo puede ser undefined
console.log(undefinedVaue); // Salida: undefined

console.log("\n----------------------\n");

// 6. object: Representa cualquier valor que no sea primitivo
// es decir, que no sea number, string, boolean, etc.
let objectValue: object = { key: "value" };
console.log(objectValue); // Salida: { key: "value" }

objectValue = [1, 2, 3]; // También puede ser un array
console.log(objectValue); // Salida: [1, 2, 3]

console.log("\n----------------------\n");

// 7. symbol: Cada símbolo es único, incluso si tienen la misma descripción
let symbol1: symbol = Symbol("miSimbolo");
let symbol2: symbol = Symbol("miSimbolo");
console.log(symbol1 === symbol2); // Salida: false; cada símbolo es único

const objWithSymbol = {
    [symbol1]: "valor1",
    [symbol2]: "valor2",
};

console.log(objWithSymbol[symbol1]); // Salida: valor1
console.log(objWithSymbol[symbol2]); // Salida: valor2

// Uso de datos en un contexto:
function processData(value: any): void {
    if (typeof value === "string") {
        console.log("El valor es un string:", value);
    } else if (typeof value === "number") {
        console.log("El valor es un numero:", value);
    } else if (value === null || value === undefined) {
        console.log("El valor es null o undefined:", value);
    } else {
        console.log("El valor es de otro tipo:", value);
    }
}

processData("Texto");
processData(123);
processData(null);
processData(undefined);
processData({ key: "valor" });