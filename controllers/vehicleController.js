import vehicle from "../models/vehicle.js";

export async function getVehicle(req, res){
    try {
        const vehicles = await Vehicle.find()
        res.json(vehicles);
    } catch (error){
        res.status(500).json({error})
    }
}


export async function postVehicle(req, res){
    const body = req.body;
    try{
        const vehicle = new Vehicle(body)
        await vehicle.save()
        res.status(201).json('vehicle created sucessfully')
    }catch (error){
        res.status(500).json(error)
    }
}

export async function putVehicle(req, res){
    const {plate, color, model} = req.body
    try{
        await Vehicle.findOneAndUpdate({plate:plate},{color:color, model:model})
        res.json = status(201).json('vehicle updated successfully') 
    }catch (error){
        res.status(500).json(error)
    }
}

export async function deleteVehicle(req, res){
    const _id = req.params.id
    //const plate = req.params.plate
    try {
        await vehicle.findByIdAndDelete({_id:_id})
        //await vehicle.findOneAndDelete({plate:plate})
        res.json('vehicle deleted successfully')
    } catch (error) {
        res.status(404).json('vehicle dont found')
    }
}