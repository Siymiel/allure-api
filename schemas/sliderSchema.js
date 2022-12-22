const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SliderSchema = new Schema({ 
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true
    },
    bg: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = SliderSchema