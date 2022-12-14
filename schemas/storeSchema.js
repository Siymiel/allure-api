const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const StoreSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    products: [
        {
            productId: {
                type: String,
            }
        }
    ],
    image: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    }
}, { timestamps: true})

module.exports = StoreSchema