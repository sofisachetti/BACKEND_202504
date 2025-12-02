// Importamos la instancia de la aplicacion configurada desde el archivo 'app'
// Este archivo contiene toda la logica de la aplicacion, como rutas, middlewares y configuracion general.
import app from "./app.js";

// === Configuracion del puerto ===
// Definimos el puerto en el que el servidor escuchara las solicitudes HTTP
// En este caso, establecemos el valor fijo de 3000, pero en un proyecto real podriamos usar una variable de entorno
// para hacerlo mas flexible (por ejemplo, process.env.PORT || 3000).
const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});