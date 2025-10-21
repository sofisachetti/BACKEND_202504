// Declaracion de tupla
export let persona: [string, number];

// Inicializacion de la tupla
persona = ['Ana', 25];
console.log(persona);

// Accedemos a los elementos de la tupla
console.log("Nombre:", persona[0]);
console.log("Edad:", persona[1]);

// Modificamos la tupla
persona[1] = 26;
console.log("Edad actualizada:", persona[1]);
console.log(persona);

// Desestructurar la tupla
let [nombre, edad] = persona;
console.log(`La persona se llama ${nombre} y tiene ${edad} años.`);
