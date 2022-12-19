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

const seedProducts = [
    {
        title: "Product1",
        slug: "product1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 3400,
        stores: ["639b76c0abb5995d81df23cf"],
        categories: [ "639d878a029dbd8b0643f615" ]
    },
    {
        title: "Product2",
        slug: "product2",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: "https://images.unsplash.com/photo-1664575601711-67110e027b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        price: 5400,
        stores: ["639b76c0abb5995d81df23d0"],
        categories: [ "639d878a029dbd8b0643f615" ]
    },
    {
        title: "Product3",
        slug: "product3",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: "https://images.unsplash.com/photo-1599948128020-9a44505b0d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 5400,
        stores: ["639b76c0abb5995d81df23d0"],
        categories: [ "639d878a029dbd8b0643f618" ]
    },
    {
        title: "Product4",
        slug: "product4",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 2400,
        stores: ["639b76c0abb5995d81df23d0"],
        categories: [ "639d878a029dbd8b0643f619" ]
    },
    {
        title: "Product5",
        slug: "product5",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 1200,
        stores: ["639b76c0abb5995d81df23d2"],
        categories: [ "639d878a029dbd8b0643f619" ]
    },
    {
        title: "Product6",
        slug: "product6",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: "https://images.unsplash.com/photo-1585433405076-9626d637cc83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 800,
        stores: ["639b76c0abb5995d81df23d2"],
        categories: [ "639d878a029dbd8b0643f619" ]
    },

];

const seedDB = async () => {
    await Product.deleteMany({});
    await Product.insertMany(seedProducts);
    log("Seeding Products Successfull".bgBrightGreen.bold)
};

seedDB().then(() => {
    mongoose.connection.close();
});