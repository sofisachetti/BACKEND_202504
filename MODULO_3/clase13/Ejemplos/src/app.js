// Importamos el framework Express, que nos permite crear servidores web y manejar solicitudes HTTP de manera sencilla.
import express from 'express';

// Importamos el router de usuarios desde el archivo correspondiente.
// Este archivo contiene todas las rutas relacionadas con el recurso 'usuarios'.
import userRouter from './routes/userRoutes.js';

// Creamos una instancia de la aplicacion Express.
// Este objeto representa la aplicación web y será el punto central para configurar rutas, middlewares y otras funcionalidades.
const app = express();

// === Middleware para parsear JSON ===
// express.json() es un middleware integrado en express que se encarga de interpretar el cuerpo de las solicitudes HTTP en formato JSON.
// Esto permite que 'req.body' este disponible como un objeto JavaScript, facilitando el manejo de datos enviados por el cliente.
app.use(express.json());

// === Configuracion de rutas ===
// Asociamos el router 'userRouter' al prefijo '/users'.
// Esto significa que todas las rutas definidas en 'userRouter' estrán disponibles bajo la ruta base '/users'.
// Por ejemplo:
// - Una solicitud a '/users' será manejada por 'userRouter.get('/')'.
// - Una solicitud a '/users/:id' sera manejada por 'userRouter.get('/:id')', y asi sucesivamente.
app.use('/users', userRouter);

// === Exportacion de la aplicacion ===
// Exportamos la instancia de la aplicacion para que pueda ser utilizada en otro archivo (como server.ts)
// Esto permite mantener el codigo modular y reutilizable
export default app;