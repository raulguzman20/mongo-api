import  {Router}  from "express";
import { getVehicle, postVehicle, putVehicle, deleteVehicle} from '../controllers/vehicleController.js'


const routersVehicle = Router ()


routersVehicle.get('/', getVehicle)
routersVehicle.post('/', postVehicle)
routersVehicle.put('/', putVehicle)
routersVehicle.delete('/', deleteVehicle)

export default routersVehicle