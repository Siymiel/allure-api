const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 2,
    },
    lastname: {
        type: String,
        required: true,
        minlength: 2,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true
    },
    role: {
        type: String,
        default: 'user',
        enum: ["user", "vendor", "admin"]
    },
    status: {
        type: Boolean,
        default: true, 
    },
    accessToken: {
        type: String
    }
}, { timestamps: true });

module.exports = userSchema;