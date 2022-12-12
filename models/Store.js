const mongoose = require('mongoose')
const StoreSchema = require("../schemas/storeSchema")

module.exports = mongoose.model("Store", StoreSchema);