import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
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
    products: [
        {
            productId: {
                type: String
            }
        }
    ]
}, { timestamps: true });

export default storeSchema;