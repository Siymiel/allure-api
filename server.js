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
const jwt = require('jsonwebtoken');
const JWT_SECRET = require("./utils/config")
const User = require("./models/User")
const logger = require("./utils/winston")
var morgan = require('morgan')

const app = express();

colors.enable()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const morganMiddleware = morgan(
  function (tokens, req, res) {
    return JSON.stringify({
      method: tokens.method(req, res),
      url: tokens.url(req, res),
      status: Number.parseFloat(tokens.status(req, res)),
      content_length: tokens.res(req, res, 'content-length'),
      response_time: Number.parseFloat(tokens['response-time'](req, res)),
    });
  },
  {
    stream: {
      // Configure Morgan to use our custom logger with the http severity
      write: (message) => {
        const data = JSON.parse(message);
        logger.http(`incoming-request`, data);
      },
    },
  }
);

app.use(morganMiddleware)

// Verify token - JWT
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

const { log }= console;

// Mongo connection and server start 
if(!config.MONGO_URI) {
    log("MONGO_URI not found in .env file")
} else {
    mongoose
    .connect(config.MONGO_URI)
    .then(() => {
        log('DB Connection Successfull'.green);
        app.listen(config.PORT || 8080, () => {
            log(`Server is running on port: ${config.PORT}`.yellow);
        });
    })
    .catch(err => log(err))
}

