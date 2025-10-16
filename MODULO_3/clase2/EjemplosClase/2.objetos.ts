// 1. Definicion de un objeto basico
let auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2023
}
// mostramos las propiedades
console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}, Año: ${auto.anio}.`);

// 2. Definicion de objeto con declaracion explicita del tipo 
let libro: {titulo: string; autor: string; anio: number} = {
    titulo: "100 anios de soledad",
    autor: "Garcia Marquez",
    anio: 1984
}
// mostramos las propiedades
console.log(`Titulo: ${libro.titulo}, Autor: ${libro.autor}, Año de publicacion: ${libro.anio}`);

// 3. Objeto con propiedades opcionales
let estudiante: {nombre: string, edad?: number} = {
    nombre: "Sofia",
    edad: 29
}
console.log(`Nombre del estudiante: ${estudiante.nombre}, Edad: ${estudiante.edad ?? "Desconocida"}`);

// 4. Metodos en un objeto
let perro = {
    nombre: "Firulais",
    raza: "Caniche",
    ladrar: function() {
        return `${this.nombre} está ladrando!`
    }
}
console.log(perro.ladrar());
