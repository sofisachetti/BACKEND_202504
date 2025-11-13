// Con cancelación (usando clearTimeout())
// Podemos asignar setTimeout() a una variable y luego cancelarlo 
// antes de que se complete el tiempo usando clearTimeout()

let temporizador = setTimeout(() => {
    console.log("Este mensaje no se mostrara porque vamos a cancelar");
}, 3000)

clearTimeout(temporizador); // Cancelamos el temporizador antes de los 3 segundos.

// Este código no mastrará nada en la consola porque cancelamos el temporizador
// antes de que se complete el tiempo de espera de 3 segundos. 

