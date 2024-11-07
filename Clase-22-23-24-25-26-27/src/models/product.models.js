import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {title:{
        type: String,
        required: true
    },
        price:{
            type: Number,
            required: true
        },
        stock:{
            type: Number,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        category:{
            type: String,
            required: true
        },
        active:{
            type: Boolean,
            required: true,
            default: true
        },
        seller_id:{
            type: mongoose.Schema.Types.ObjectId, //Debe ser el mismo tipo que el id de la coleccion de User
            ref: 'User',
            required: true
        },
        image:{
            type: String,
            required: true
        },
        fecha_creacion:{
            type: Date,
            default: Date.now()
        }
    }
)

const Product = mongoose.model('Product', productSchema)

export default Product