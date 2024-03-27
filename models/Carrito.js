import { Schema, Types, model} from 'mongoose';

let collection = 'carritos'
let schema = new Schema({
    id:{type:Types.ObjectId},
    products:[{type:Array}],
    state:{type:String,default:'pendiente'}
}, {
    timestamps: true
})

const Carrito = model(collection, schema)

export default Carrito