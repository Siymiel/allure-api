const User = require("../models/User")
const { hashPassword, validatePassword } = require("../services/authService")
const jwt = require('jsonwebtoken')
const JWT_SECRET = require('../utils/config')

//@method Register
//@alias Signup
const register = async (req, res, next) => {
    try {
        const { firstname, lastname, email, role, password } = req.body;
        
        const encryptedPassword = await hashPassword(password);

        const newUser = new User({ firstname, lastname, email, password: encryptedPassword, role: role || "user" });
        const accessToken = jwt.sign({ userId: newUser._id }, 'JWT_SECRET', { expiresIn: '1d' });
        newUser.accessToken = accessToken;
        const savedUser = await newUser.save();

        res.status(200).json({ success: 1, data: savedUser })
    } catch (err) {
        next(err)
    }
}

//@method: Login
//@alias SignIn 
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({email});
        if (!user) next(new Error('Email does not exist'));
        const validPassword = await validatePassword(password, user.password)
        if (!validPassword) next(new Error('Password does not match'));
        const accessToken = jwt.sign({ userId: user._id }, 'JWT_SECRET', { expiresIn:  '1d' });
        await User.findByIdAndUpdate(user._id, { accessToken });

        res.status(200).json({
            success: 1,
            data: { email: user.email, role: user.role },
            accessToken
        });
    } catch (err) {
       next(err)
    }
}

//@method Logout
const logout = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: "User logged out" });
    } catch (err) {
        res.status(500).json({ error: "Error logging out" })
    }
}
 

module.exports = {
    register,
    login,
    logout
}