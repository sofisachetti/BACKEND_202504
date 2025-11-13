// Intervalo concondicion de parada
// Este intervalo se detendrá automáticamente cuando el contador llegue a 5.

let contador1 = 0

const intervalo1 = setInterval(() => {
    contador1 ++
    console.log(`Contador (con condicion): ${contador1}`);
    
    if (contador1 === 5) {
        clearInterval(intervalo1) // Cancela el intervalo cuando el contador llega a 5.
        console.log("Intervalo con condicion detenido al llegar a 5.");
    }
}, 1000);

// Este segundo intervalo se ejecuta hasta que el contador alcance 5, 
// después se detiene automáticamente.