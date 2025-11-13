// Ejemplo de actualizacion de interfaz grafica
// setInterval() tambien puede ser util para actualizar partes de una interfaz 
// gráfica de usuario de forma periódica. Por ejemplo, un relog que se actualiza
// cada un segundo.

function reloj() {
    // Creamos una instancia de Date para obtener la fecha y hora actualizada
    const ahora = new Date();

    // Obtenemos la hora actual (de 0 a 23) de la instancia date
    const horas = ahora.getHours();

    // Obtenemos los minutos actuales (de 0 a 59) de la instancia date
    const minutos = ahora.getMinutes();

    // Obtenemos los segundos (de 0 a 59) de la instancia date
    const segundos = ahora.getSeconds();

    // Mostramos la hora actual
    console.log(`${horas}:${minutos}:${segundos}`);
}

// Creamos un intervalo que llame a la funcion reloj()
let relojIntervalo = setInterval(reloj, 1000)

// Este intervalo va a seguir ejecutandose indefinidamente hasta que sea detenido manualmente 
// usando clearInterval(relojIntervalo) si lo necesitas mas adelante. 