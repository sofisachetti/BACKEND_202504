// 1. Funcion basica
function sumar(a: number, b: number): number {
    return a + b;
}
let resultadoSuma = sumar(3, 4);
console.log(resultadoSuma);

// 2. fuencion que no retorna nada (void)
function mostrarMensaje(mensaje: string): void {
    console.log(mensaje);
}
mostrarMensaje('Hola');

// 3. Funciones con paramentro opcional
function saludar(nombre: string, saludo?: string): string {
    if (saludo) {
        return `${saludo}, ${nombre}`
    } else {
        return `Hola, ${nombre}`
    }
}
console.log(saludar("Sofia"));
console.log(saludar("Vero", "Buenas tardes"));

function saludar2(nombre: string, saludo: string = 'Hola'): string {
    return `${saludo}, ${nombre}`
}
console.log(saludar2("Anto"));
console.log(saludar2("Gabi", "Buenas tardes"));

