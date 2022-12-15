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
    isActive: {
        type: Boolean,
        default: true
    },
    products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    }

}, { timestamps: true });

module.exports = categorySchema