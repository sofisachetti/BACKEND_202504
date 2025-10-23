// Ejemplo basico con objeto
export let alumna = {
    nombre: "Lucia",
    edad: 22,
    curso: "Programacion"
};

for (let propiedad in alumna) {
    console.log(`Clave: ${propiedad}, Valor: ${alumna[propiedad as keyof typeof alumna]}`);
};

console.log('\n-----------------------------\n');


// propiedad 'as keyof typeof alumna' -> con esto le decimos al compilador que la variable "propiedad" es una clave válida de las propiedades de objeto "alumna" (que podrpia ser nombre, edad o curso).

// Ejemplo con array
let lenguajes = ["JavaScript", "Python", "TypeScript"];

for (let indice in lenguajes) {
    console.log(`Indice: ${indice}, Valor: ${lenguajes[indice]}`);
};