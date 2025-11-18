// Generamos dos promesas basicas
const promesa11 = Promise.reject('Error en promesa 1');
const promesa22 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Hola");
});
const promesa33 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "chicas de Back");
});

Promise.allSettled([promesa11, promesa22, promesa33])
    .then((resultados) => {
        console.log("Primera promesa resuelta: ", resultados);
    })
    .catch((error) => {
        console.error("Todas las promesas fueron rechazadas: ", error);
    });