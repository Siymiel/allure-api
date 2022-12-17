const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
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
    products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = categorySchema