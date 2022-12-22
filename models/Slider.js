const mongoose = require('mongoose')
const SliderSchema = require('../schemas/sliderSchema')

module.exports = mongoose.model("Slider", SliderSchema)