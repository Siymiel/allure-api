const mongoose = require('mongoose')
const User = require('../models/User')
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
        log('DB Connection from UserSeeder established'.bgBlue.bold);
    })
    .catch(err => log(err))
}

const seedUsers = [
    {
        firstname: "admin",
        lastname: "doe",
        email: "admin@example.com",
        password: "$2b$10$yXh3kmCpOJ6zsv5cFjKSD.t26eno6MlLhGB3xFHWghIqFv6yLcpPC",
        role: "admin"
    },
    {
        firstname: "vendor",
        lastname: "doe",
        email: "vendor@example.com",
        password: "$2b$10$yXh3kmCpOJ6zsv5cFjKSD.t26eno6MlLhGB3xFHWghIqFv6yLcpPC",
        role: "vendor"
    },
    {
        firstname: "user",
        lastname: "doe",
        email: "user@example.com",
        password: "$2b$10$yXh3kmCpOJ6zsv5cFjKSD.t26eno6MlLhGB3xFHWghIqFv6yLcpPC",
        role: "user"
    }
];

const seedDB = async () => {
    await User.deleteMany({});
    await User.insertMany(seedUsers);
    log("Seeding Users Successfull".bgBrightGreen.bold)
};

seedDB().then(() => {
    mongoose.connection.close();
});