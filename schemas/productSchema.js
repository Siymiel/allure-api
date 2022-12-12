import mongoose from "mongoose";
import slug from "mongoose-slug-generator";

mongoose.plugin(slug)

const productSchema = new mongoose.Schema({
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
    categories: {
        type: Array,
        required: true
    },
    size: {
        type: Array
    },
    color: {
        type: Array
    },
    price: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

export default productSchema;