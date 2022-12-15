const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        slug: "title",
        unique: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        default: true
    },
    stores: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Store'
    }

}, { timestamps: true })

module.exports = ProductSchema

// Relationships excerpt
// 1.A product belongs to a store
// 2. A product has be found in many stores