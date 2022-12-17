const mongoose = require('mongoose')
const Category = require('../models/Category')
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
        log('DB Connection from CategoriesSeeder established'.bgBlue.bold);
    })
    .catch(err => log(err))
}

const seedCategories = [
    {
        name: "Category 1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://images.unsplash.com/photo-1621797064712-2ed3a36fc009?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        products: ["639b7900a705908e8516ab89"],
        isActive: true
    },
    {
        name: "Category 2",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        products: ["639b7900a705908e8516ab89"],
        isActive: true
    },
    {
        name: "Category 3",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://images.unsplash.com/photo-1614291129226-41dae34c2128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        products: ["639b7900a705908e8516ab89"],
        isActive: true
    },
    {
        name: "Category 4",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://images.unsplash.com/photo-1534607287018-541c7d97748f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
        products: ["639b7900a705908e8516ab89"],
        isActive: true
    },
    {
        name: "Category 5",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://images.unsplash.com/photo-1621083487521-f44dccca8024?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
        products: ["639b7900a705908e8516ab89"],
        isActive: true
    },
    {
        name: "Category 6",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://images.unsplash.com/photo-1519419451778-14599a49ec41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        products: ["639b7900a705908e8516ab89"],
        isActive: true
    },
    {
        name: "Category 7",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://images.unsplash.com/photo-1630398777700-afb6d24a502d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        products: ["639b7900a705908e8516ab89"],
        isActive: true
    },
];

const seedDB = async () => {
    await Category.deleteMany({});
    await Category.insertMany(seedCategories);
    log("Seeding Categories Successfull".bgBrightGreen.bold)
};

seedDB().then(() => {
    mongoose.connection.close();
});