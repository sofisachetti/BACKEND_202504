// Importamos modulos para trabajar con sist. de archivos y rutas 
import fs from 'fs';
import path from 'path';

// Definimos la ruta del archivo JSON que usamos de base de datos
const filePath = path.join(__dirname, '../database/quotes.json');

// Intrfaz que representa la estructura de una frase
interface Quote {
    id: string
    text: string
    author: string
};

// Encapsulamos todas las operaciones relacionadas con frases en una Clase
export class QuotesModel {

    // Leer todas las frases desde el archivo
    static getAllQuotes(): Quote[] {
        // Obtenemos todos los datos desde nuestra BD
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        return data.quotes;
    };

    // Obtener una frase segun ID
    static getQuoteById(id: string): Quote | undefined {
        const data = this.getAllQuotes(); // obtener todas las frases
        // Buscamos la frase por su ID con un metodo find
        return data.find((quote) => quote.id === id);
    };

    // Crear una frase
    static addQuote(newQuote: Quote): Quote {
        // Parseamos el archivo JSON
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        // Creamos un nuevo ID basado en la longitud del array
        const newId = (data.quotes.length + 1).toString();

        // Creamos una nueva frase
        // Operador spread (...): se usa para combinar objetos
        const quote = { ...newQuote, id: newId };
        data.quotes.push(quote);
        // Incrementamos el contador de frases
        data.info.total += 1;

        // Guardar nuevamente los datos en formato JSON
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        return quote;
    };

    // Actualizar una frase
    static updateQuote(id: string, updatedData: Partial<Quote>): Quote | null {
        // Leemos el JSON y buscamos por ID
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        const index = data.quotes.findIndex((quote: Quote) => quote.id === id);

        //Si no encuentra la frase por ID
        if (index === -1) return null
        
        // Si el ID esta bien, actualiza la frase cambiando datos existentes
        data.quotes[index] = { ...data.quotes[index], ...updatedData };
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        return data.quotes[index]; // Devolver la frase actaulizada
    };

    // Eliminar una frase
    static deleteQuote(id: string): boolean {
        // Leer el JSON y buscar por index
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        const index = data.quotes.findIndex((quote: Quote) => quote.id === id);

        // Si no lo encuentra, nos devuvle false
        if (index === -1) return false;
        
        // Eliminamos la frase y se reduce el contador
        data.quotes.splice(index, 1);
        data.info.total -= 1;

        // Guardamos los cambios
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        return true;
    };
}