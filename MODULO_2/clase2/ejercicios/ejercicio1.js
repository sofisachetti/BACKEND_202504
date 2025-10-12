// Creación del objeto JSON
let libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    genero: ["Realismo mágico", "Novela"]
};

// Mostrar el título y el autor del libro en la consola
console.log("Título:", libro.titulo);
console.log("Autor:", libro.autor);

// Actualizar el año del libro a un valor más reciente
libro.anio = 2024;

// Añadir una nueva propiedad llamada páginas
libro.paginas = 417;

// Mostrar el objeto actualizado en la consola
console.log("Objeto actualizado:", libro);