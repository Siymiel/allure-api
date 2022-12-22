const mongoose = require('mongoose')
const Slider = require('../models/Slider')
const config = require('../utils/config')
var colors = require('colors')

colors.enable()

const { log } = console

if(!config.MONGO_URI) {
    log("MONGO_URI not found in .env file".bgBrightRed)
} else {
    mongoose
    .connect(config.MONGO_URI)
    .then(() => {
        log('DB Connection from StoreSeeder established'.bgBlue.bold);
    })
    .catch(err => log(err))
}

const seedSliders = [
    {
        title: "december sale",
        desc: "don't compromise on makeup! get flat 30% off for new arrivals.",
        img: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        bg: "f5fafd",
    },
    {
        title: "nail products",
        desc: "don't compromise on nails! get flat 20% off for new arrivals.",
        img: "https://images.unsplash.com/photo-1616754344345-222952932975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        bg: "fcf1ed",
    },
    {
        title: "get a make over",
        desc: "get a make over for a flat 20% off for make up products.",
        img: "https://images.unsplash.com/photo-1511929825537-516974a253df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        bg: "f0fff9",
    },
    {
        title: "handy kits",
        desc: "don't compromise on confort! get flat 15% off for quality seats.",
        img: "https://images.unsplash.com/photo-1532947974358-a218d18d8d14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        bg: "f0fff9",
    },
    {
        title: "herbal products",
        desc: "get your worth! get flat 5% off for new herbal products.",
        img: "https://images.unsplash.com/photo-1556228578-567ba127e37f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=851&q=80",
        bg: "14d5a9",
    },
];

const seedDB = async () => {
    await Slider.deleteMany({})
    await Slider.insertMany(seedSliders)
    log("Seeding Slider Items Successfull".bgBrightGreen.bold)
};

seedDB().then(() => {
    mongoose.connection.close();
});