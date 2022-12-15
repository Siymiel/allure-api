// const JWT_SECRET = require("../utils/config")
// const User = require("../models/User")
// const jwt = require('jsonwebtoken');

// module.exports = {
//     verifyToken: async (req, res, next) => {
//         if ( req.headers["token"] ) {
//                 const accessToken = req.headers["token"];
//                 const { userId, exp } = jwt.verify(accessToken, 'JWT_SECRET');
//                 if ( exp < Date.now().valueOf() / 1000 ) {
//                     return res.status(400).json({ error: "JWT token has expired, please login to obtain a new one" })
//                 }
//                 res.locals.loggedInUser = await User.findById(userId);
//                 next();
//             } else {
//                 next();
//             }
//     }
// }