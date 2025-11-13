// Intervalo indefinido (Cancelacion manual o hasta que termine)
// setInterval() seguirá ejecutándose indefinidamente hasta que lo detengamos manualmente.

let contador = 0; // Inicializamos el contador en 0

const intervalo = setInterval(() => {
    contador ++;
    console.log(`Contador (Indefinido): ${contador}`);
    // clearInterval(intervalo)
}, 1000);

// En la línea 9 podríamos llamar a clearInterval() para detener el contador
// Por ejemplo, podríamos tener alguna lógica condicional externa o un evento que lo detenga,
// pero en este caso lo dejamos correr indefinidamente. 

console.log("Intervalo indefinido iniciado... ");