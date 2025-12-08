// Importando el modulo Router
import { Router } from "express";

// Importar las funciones del controlador que las que gestionan las operaciones
import {
    getAllQuotes,
    getQuoteById,
    createQuote,
    updateQuote,
    deleteQuote
} from '../controllers/quotes-controllers';

// Importar el middleware que controla los datos de las frases
import { validateQuote } from "../middlewares/validate-middleware";

// Creamos una instancia de Router
const router: Router = Router();

// RUTAS
// GET para obtener todas las frases
router.get('/', getAllQuotes);
//GET áar obtener por ID
router.get('/:id', getQuoteById);
// POST para crear una nueva frase
router.post('/', validateQuote, createQuote);
// PATCH para actualizar una frase existente
router.patch('/:id', updateQuote);
// DELETE para eliminar una frase
router.delete('/:id', deleteQuote);

// Export del enrutador
export default router;