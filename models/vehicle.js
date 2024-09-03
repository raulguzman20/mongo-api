import {model, Schema} from 'mongoose';

const VehicleSchema = new Schema({
    plate:{
        type: String,
        required:[true, 'paca es requerida'],
        unique: true,
        minlength:[5,'minimo 5 caracteres'],
        maxlength:[6,'maximo 6 caracteres'],
    },
    color:{
        type: String,
        required: [true,'color es requerido'],
        minlength: [5,'minimo 5 caracteres'],
    },
    model:{
        type: Number,
        required: [true,'modelo es requerido'],
    }
});

export default model('Vehicle', VehicleSchema,'vehicle');


