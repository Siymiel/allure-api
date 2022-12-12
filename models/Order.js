const mongoose = require('mongoose')
const orderSchema = require("../schemas/orderSchema")

const model = mongoose.model;

module.exports = model("Order", orderSchema);