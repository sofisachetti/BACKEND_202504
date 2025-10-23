// Ejemplo basico de array
export let lenguajes = ["JavaScript", "Python", "TypeScript"];

for (let lenguaje of lenguajes) {
    console.log(`Ejemplo de for...of con array: ${lenguaje}`);
};

console.log('\n-----------------------------\n');

// Ejemplo con una cadena de texto
let saludo = "Hola";

for (let letra of saludo) {
    console.log(`Ejemplo de for...of con string: ${letra}`);
};