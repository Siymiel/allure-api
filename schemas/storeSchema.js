const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const StoreSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    },
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }
}, { timestamps: true})

module.exports = StoreSchema