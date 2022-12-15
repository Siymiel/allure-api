const express = require("express")
const mongoose = require("mongoose")
const config = require('./utils/config')
const cors = require("cors");
var colors = require('colors')
const productRoute = require("./routes/productRoute")
const cartRoute = require('./routes/cartRoute')
const orderRoute = require("./routes/orderRoute")
const userRoute = require("./routes/userRoute")
const storeRoute = require("./routes/storeRoute")
const morganMiddleware = require('./utils/morgan')
const JWT_SECRET = require("./utils/config")
const User = require("./models/User")
const jwt = require('jsonwebtoken');

const app = express();

colors.enable()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morganMiddleware)

app.use(async (req, res, next) => {
 if (req.headers["token"]) {
  const accessToken = req.headers["token"];
  const { userId, exp } = jwt.verify(accessToken, 'JWT_SECRET');
  if (exp < Date.now().valueOf() / 1000) { 
   return res.status(401).json({ error: "JWT token has expired, please login to obtain a new one" });
  } 
  res.locals.loggedInUser = await User.findById(userId); next(); 
 } else { 
  next(); 
 } 
});

// Routes
app.use('/api/v1/products', productRoute)
app.use('/api/v1/cart', cartRoute)
app.use('/api/v1/orders', orderRoute)
app.use('/api/v1/users', userRoute);
app.use('/api/v1/stores', storeRoute);

// Mongo connection and server start 
if(!config.MONGO_URI) {
    console.log("MONGO_URI not found in .env file")
} else {
    mongoose
    .connect(config.MONGO_URI)
    .then(() => {
        console.log('DB Connection Established'.bgBlue.bold);
        app.listen(config.PORT || 8080, () => {
            console.log(`Server is running on PORT: ${config.PORT}`.bgGreen.bold.underline);
        });
    })
    .catch(err => console.log(err))
}

