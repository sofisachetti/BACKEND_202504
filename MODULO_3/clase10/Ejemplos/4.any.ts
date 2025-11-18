const promesa4 = Promise.reject('Error en promesa 4');
const promesa5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Hola");
});
const promesa6 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "mundo!");
});

// Utilizamos Promise.any() para esperar que al menos una de las promesas se resuelva
Promise.any([promesa4, promesa5, promesa6])
    .then((resultados) => {
        console.log("Primera promesa resuelta: ", resultados);
    })
    .catch((error) => {
        console.error('Todas las promesas fueron rechazadas:', error);
    });