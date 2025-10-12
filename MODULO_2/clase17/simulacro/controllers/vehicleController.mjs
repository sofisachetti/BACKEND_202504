import {vehicleModel} from '../models/vehicleModel.mjs'
import {responseView} from '../views/vehicleView.mjs'

const vehicleController = {
    getVehicles: () => {
        const vehicles = vehicleModel.readVehicles();
        return responseView.formatResponse(vehicles)
    },
    //metodo para agregar un vehiculo
    addVehicle: (newVehicle) => {
        //llamamos a la funcion readVehicles del modelo 
        const vehicles = vehicleModel.readVehicles();
        vehicles.push(newVehicle);
        vehicleModel.writeVehicles(vehicles)
        return responseView.formatResponse({ message: 'Vehiculo agregado con exito' })
    }
}

export { vehicleController }