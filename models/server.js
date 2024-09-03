import express from 'express';
import 'dotenv/config.js';
import dbConnection from '../database/config.js';
import { getVehicle, postVehicle, putVehicle, deleteVehicle} from '../controllers/vehicleController.js'
import routersVehicle from '../routers/vehicleRouter.js';
import createUser from '../database/config.js'

export default class Server{
    constructor(){
        this.app = express();
        this.listen();
        this.dbConnect();
        this.pathVehicle = '/api/vehicle'
        this.route();
    
    }
    listen() {
        this.app.listen(process.env.PORT,() => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }

    async dbConnect(){
        await dbConnection()
    }

    route(){
        this.app.use(express.json());
        this.app.use(this.pathVehicle, routersVehicle);
        this.app.post('/user', createUser);

    }
}
