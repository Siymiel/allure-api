const mongoose = require('mongoose')
const Store = require('../models/Store')
const config = require('../utils/config')
var colors = require('colors')

colors.enable()

const { log }= console

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

const seedStores = [
    {
        name: "Rembo Shop",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        logo: "https://alluretechnology.africa/wp-content/uploads/2022/04/cropped-store_logo_7.jpg",
        vendor: [ "639b74bec3241385568f0474" ],
        products: [ "639d8f49daa3d70096b5235a", "639d8f49daa3d70096b5235b" ]
    },
    {
        name: "Ada Beauty Shop",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        logo: "https://alluretechnology.africa/wp-content/uploads/2022/04/cropped-store_logo_7.jpg",
        vendor: [ "639b74bec3241385568f0474" ],
        products: [ "639b7900a705908e8516ab89" ]
    },
    {
        name: "Dros Beauty",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        logo: "https://alluretechnology.africa/wp-content/uploads/2022/04/cropped-store_logo_7.jpg",
        vendor: [ "639b74bec3241385568f0474" ],
        products: [ "639b7900a705908e8516ab89" ]
    },
    {
        name: "Biz Shop",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        logo: "https://alluretechnology.africa/wp-content/uploads/2022/04/cropped-store_logo_7.jpg",
        vendor: [ "639b74bec3241385568f0474" ],
        products: [ "639b7900a705908e8516ab89" ]
    },
    {
        name: "Benx Palour",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        logo: "https://alluretechnology.africa/wp-content/uploads/2022/04/cropped-store_logo_7.jpg",
        vendor: [ "639b74bec3241385568f0474" ],
        products: [ "639b7900a705908e8516ab89", "639d8f49daa3d70096b5235a" ]
    },
    {
        name: "Biz Beauty",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        logo: "https://alluretechnology.africa/wp-content/uploads/2022/04/cropped-store_logo_7.jpg",
        vendor: [ "639b74bec3241385568f0474" ],
        products: [ "639b7900a705908e8516ab89" ]
    },
];

const seedDB = async () => {
    await Store.deleteMany({});
    await Store.insertMany(seedStores);
    log("Seeding Stores Successfull".bgBrightGreen.bold)
}; 

seedDB().then(() => {
    mongoose.connection.close();
});