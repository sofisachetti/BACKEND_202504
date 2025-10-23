// Ejemplo de funcion generica
function identidad<T>(valor: T): T {
    return valor
};

// ejemplos de uso
export let numero = identidad<number>(10); // T va a ser tipo number
let texto = identidad<string>("Hola"); // T va a ser un string
console.log(numero, texto);
