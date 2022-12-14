const mongoose = require('mongoose')
const Product = require('../models/Product')
const config = require('../utils/config')
var colors = require('colors')

colors.enable()

const log = console.log

if(!config.MONGO_URI) {
    log("MONGO_URI not found in .env file".bgBrightRed)
} else {
    mongoose
    .connect(config.MONGO_URI)
    .then(() => {
        log('DB Connection from ProductSeeder established'.bgBlue.bold);
    })
    .catch(err => log(err))
}

const productUsers = [
    {
        title: "",
        desc: "",
        categories: [],
        price: null,
    },
];

const seedDB = async () => {
    await Product.deleteMany({});
    await Product.insertMany(productUsers);
    log("Seeding Products Successfull".bgBrightGreen.bold)
};

seedDB().then(() => {
    mongoose.connection.close();
});