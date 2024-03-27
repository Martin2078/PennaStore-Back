import { Schema, model,Types} from 'mongoose';

let collection = 'products'
let schema = new Schema({
    id:{type:Types.ObjectId},
    name: {type: String, required:true},
    image: {type: String, required:true}
}, {
    timestamps: true
})

const Product = model(collection, schema)

export default Product