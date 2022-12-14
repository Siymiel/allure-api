const mongoose = require('mongoose')
const Store = require('../models/Store')
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
        log('DB Connection from StoreSeeder established'.bgBlue.bold);
    })
    .catch(err => log(err))
}

const seedStores = [
    {
        userId: "6399808950d54ebf16fea1f2",
        name: "Rembo Shop",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        products: [
            {
            productId: "63998a5772f080695d2a9358",
            productId: "63998a5772f080695d2a9359"
            }
        ],
        image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        userId: "6399808950d54ebf16fea1f2",
        name: "Ada Beauty Shop",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        products: [
            {
            productId: "63998a5772f080695d2a935a"
            }
        ],
        image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        userId: "6399808950d54ebf16fea1f2",
        name: "Dros Beauty",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        products: [
            {
            productId: "63998a5772f080695d2a935b", 
            productId: "63998a5772f080695d2a935c"
            }
        ],
        image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    },
    {
        userId: "6399808950d54ebf16fea1f2",
        name: "Biz Shop",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        products: [
            {
            productId: "63998a5772f080695d2a935b", 
            productId: "63998a5772f080695d2a9358",
            productId: "63998a5772f080695d2a935c"
            }
        ],
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        userId: "6399808950d54ebf16fea1f2",
        name: "Benx Palour",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        products: [ 
            {
            productId: "63998a5772f080695d2a935d", 
            productId: "63998a5772f080695d2a9358",
            productId: "63998a5772f080695d2a935c",
            productId: "63998a5772f080695d2a9358"
            }
       ],
        image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        userId: "6399808950d54ebf16fea1f2",
        name: "Biz Beauty",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        products: [
            {
            productId: "63998a5772f080695d2a935b", 
            productId: "63998a5772f080695d2a935d",
            productId: "63998a5772f080695d2a935c",
            productId: "63998a5772f080695d2a9359"
            }
        ],
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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