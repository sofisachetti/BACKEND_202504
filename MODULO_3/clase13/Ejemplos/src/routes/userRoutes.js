// Importamos el modulo Router desde Express para definir rutas en un archivo separado
import { Router } from 'express';

// Creamos una instancia de Router. Este objeto nos permite definir rutas especificas
// rlacionadas con los usuarios, agrupandolas para mejor organizacion.
const userRouter = Router();

// Definimos las rutas basicas del recurso 'usuarios'

// Ruta GET '/' para obtener todos los usuarios.
// Esta ruta responde con un mensaje genérico, ya que no estamos consultando con una base de datos
userRouter.get('/', (req, res) => {
    res.json({ message: 'Obtener todos los usuarios' }); 
});

// Ruta POST '/' para crear un nuevo usuario
// En esta ruta, los datos del usuario (name y email) se extraen del cuerpo de la solicitud (req.body).
// Luego, devolvemos un estado 201 (creado) junto con el usuario creado en el cuerpo de la respuesta.
userRouter.post('/', (req, res) => {
    const { name, email } = req.body; // Extraemos los datos enviados en la solicitud
    res.status(201).json({ message: 'Usuario creado', user: { name, email } });
});

// Ruta GET '/:id' para obtener usuario por su ID.
// El ID  se pasa como parametro en la URL y se puede acceder mediante 'req.params'
// En este caso, simplemente respondemoms con un mensaje incluyendo el ID solicitado.
userRouter.get('/:id', (req, res) => {
    const { id } = req.params; // Estaremos el ID del parametro de la URL
    res.json({ message: `Otener usuario con ID ${id}` });
});

// Ruta PUT ':id' para actualizar un usuario por su ID.
// Similar a la ruta anterior, obtenerl el ID  de 'req.params' y los nuevos datos del 'req.body'.
// En este caso respondemos con un mensaje indicando que el usuario ha sido actualizado.
userRouter.put('/:id', (req, res) => {
    const { id } = req.params; // Extraemos el ID del parametro de la URL.
    const { name, email } = req.body; // Extraemos los nuevos datos enviados en el cuerpo de la solicitud.
    res.json({ message: `Usuario con ID ${id} actualizado.`, user: { name, email }});
});

// Ruta DELETE '/:id' para eliminar un usuario por su ID.
// Obtenemos el ID del parametro de la UR y respondemos con un mensaje indicando que el usuario ha sido eliminado.
userRouter.delete('/:id', (req, res) => {
    const { id } = req.params; // Extraemos el ID del parametro de la URL.
    res.json({ message: `Usuario con ID ${id} eliminado.`});
});

// Exportamos el ROuter para que pueda ser utilizado en el archivo principal de la aplicacion.
// Esto permite mantener el codigo modular y organizado.
export default userRouter;

