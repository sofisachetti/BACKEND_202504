// Ejemplo 1: Asercion basica de tipo 'any' a 'string'
let valorGenerico: unknown = "TypeScript es increible";
// console.log(valorGenerico.length); 

let longitudString: number = (valorGenerico as string).length;
console.log(`La longitud del string es: ${longitudString}`);

console.log('\n-----------------------------\n');

// Ejemplo 2: Aserciones con tipo de union
function nombreMayuscula(nombre: string | null): string {
    if (nombre) {
        return (nombre as string).toUpperCase();
    } else {
        return "Nombre no proporcionado";
    }
}

console.log(nombreMayuscula("Ana"));
console.log(nombreMayuscula(null));

console.log('\n-----------------------------\n');

// Ejemplo 3: Aserciones con 'unknown'
export let valorDesconocido: unknown = "Este es un valor desconocido";

if (typeof valorDesconocido === 'string') {
    let longitud: number = (valorDesconocido as string).length;
    console.log(`La longitud del string desconocido es: ${longitud}`);
};

console.log('\n-----------------------------\n');

// Ejemplo 4: Aserciones dobles (para tipos incompatibles)
let valor: any = "Este es un valor";
let valorNumerico = (valor as unknown as number);
console.log(`Valor numerico con asercion doble: ${valorNumerico}`);

console.log('\n-----------------------------\n');

// Ejemplo 5: precaucion en las aserciones
let valorErroneo: any = 42;
let textoErroneo = valorErroneo as string // incorrecto, pero permitido por el compilador
console.log(textoErroneo.length); // Devuelve undefined, 'lenght' no existe en un numero
