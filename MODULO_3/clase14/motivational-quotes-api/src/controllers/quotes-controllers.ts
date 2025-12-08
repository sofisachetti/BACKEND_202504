// Importamos los tipos para definir las funciones de los controladores
import { Request, Response } from "express";

// Importamos el modelo de datos que contiene la logica
import { QuotesModel } from "../models/quotes-models";


// Controlador para obtener todas las frases
export const getAllQuotes = (req: Request, res: Response): void => {
    // Llamamos al metodo del modelo
    const quotes = QuotesModel.getAllQuotes();
    // Enviar las frases como respuesta en formato JSON
    res.json(quotes);
};


// Controlador para obtener una frase por ID
export const getQuoteById = (req: Request, res: Response): void => {
    const { id } = req.params; // Extrae el parametro ID del endpoint
    // Llamamos al modelo
    const quote = QuotesModel.getQuoteById(id);

    // Si no lo encuentra, devuelve error
    if(!quote) {
        res.status(404).json({ error: 'Frase no encontrada.' });
        return
    }

    // Si la encuentra, envia la respuesta
    res.json(quote);
};

// Controlador para crear una nueva frase
export const createQuote = (req: Request, res: Response): void => {
    // Llamamos al modelo
    const newQuote = QuotesModel.addQuote(req.body);
    // Devolver la frase recien creada
    res.status(201).json(newQuote);
};

// Controlador para actualizar una frase
export const updateQuote = (req: Request, res: Response): void => {
    const { id } = req.params; // Extraemos el parametro del endpoint
    // Llamamos al metodo del modelo
    const updateQuote = QuotesModel.updateQuote(id, req.body);

    // Si no lo encuentra, devuelve error
    if (!updateQuote) {
        res.status(404).json({ error: 'Frase no encontrada.' });
        return
    }

    // Devolvemos la frase
    res.json(updateQuote);
};

// Controlador para Eliminar
export const deleteQuote = (req: Request, res: Response): void => {
    const { id } = req.params; // Extraemos el parametro del endpoint
    // Llamamos al metodo del modelo
    const isDeleted = QuotesModel.deleteQuote(id);
    // Verificacion
    if (!isDeleted) {
        res.status(404).json({ error: 'Frase no encontrada' });
        return
    }

    // Si es eliminado, mandamos respuesta
    res.status(204).send;
}