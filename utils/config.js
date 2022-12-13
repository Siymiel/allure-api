const dotenv = require("dotenv").config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI || null;
const JWT_SECRET = process.env.JWT_SECRET

module.exports = {
    PORT,
    MONGO_URI,
    JWT_SECRET
}