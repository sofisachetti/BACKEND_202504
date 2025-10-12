import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Recordemos que la biblioteca UUID no tiene soporte con CommonJS, es por esto que le damos la extension 'mjs' a nuestro archivo

// Al estar trabajando con EMS, no podemos utilizar variables con scope globales (como lo serían __dirname y __filename)
// Por lo tanto, lo que estamos haciendo aquí es 'recrearlas' manualmente de la siguiente forma:
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, '../data/vehicles.json')

const vehicleModel = {

    readVehicles: () => {
        const data = fs.readFileSync(filePath)
        return JSON.parse(data)
    },

    writeVehicles: (vehicles) => {
        const jsonData = JSON.stringify(vehicles, null, 2)
        fs.writeFileSync(filePath, jsonData)
    }
}

export { vehicleModel }