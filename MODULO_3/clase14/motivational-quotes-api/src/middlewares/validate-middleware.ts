// Importamos los tipos especificos de Express
import { Request, Response, NextFunction } from "express";

// Validamos como ingresan los datos en una frase
export const validateQuote = (req: Request, res: Response, next: NextFunction): void => {
    // Extraemos text y author del cuerpo de la solicitud
    const { text, author } = req.body;

    // comprobamos si existen
    if (!text || typeof text !== 'string') {
        res.status(400).json({ error: 'El campo "text" es requerido.' });
        return
    }

    if (!author || typeof author !== 'string') {
        res.status(400).json({ error: 'El campo "autor" es requerido.' });
        return
    }

    // Si todo esta bien, pasa al siguinte middleware
    next();
};