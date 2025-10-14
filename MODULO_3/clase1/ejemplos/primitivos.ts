// Ejemplo de tipor primitivos en TypeScript

// 1. string (cadenas de texto)
let nombre: string = "Ada Lovelace";
let saludo: string = `Hola, ${nombre}, bienvenida a TypeScript!`;
console.log(saludo); // Salida: Hola, Ada Lovelace, bienvenida a TypeScript!

// 2. number (Números: enteros, decimales y notación científica)
let entero: number = 42;
let decimal: number = 3.14;
let cientifico: number = 1e5; // Notación científica: 100000
console.log("Entero:", entero); // Salida: Entero: 42
console.log("Decimal:", decimal); // Salida: Decimal: 3.14
console.log("Cientifico:", cientifico); // Salida: Cientifico: 100000

// 3. boolean (Valores lógicos: true o false)
let esEstudiante: boolean = true;
let tieneLicencia: boolean = false;
console.log("Es estudiante?:", esEstudiante); // Salida: Es estudiante?: true
console.log("Tiene licencia?:", tieneLicencia); // Saldia: Tiene licencia?: false

// 4. null (Ausencia intencional de valor)
let valorNulo: null = null;
console.log("Valor nulo:", valorNulo); // Salida: Valor nulo: null

// 5. undefined (Valor no inicializado)
let valorIndefinido: undefined = undefined;
console.log("Valor indefinido:", valorIndefinido); // Salida: Valor indefinido: undefined

// 6. symbol (Símbolos únicos)
let id1: symbol = Symbol("id");
let id2: symbol = Symbol("id");
console.log("Son símbolos únicos?:", id1 === id2); // Salida: Sonsímbolos únicos?: false
