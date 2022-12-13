const User = require('../models/User')

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({})
        res.status(200).json({data: users})
    } catch (err) {
        next(err)
    }
}

const getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user) return next(new Error("User not found"));
        res.status(200).json({data: user});
    } catch (err) {
        next(err)
    }
}

const updateUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        if(!user) return next(new Error("User not found"));
        res.status(200).json({
            data: user, 
            message: "User has been updated"
        });
    } catch (err) {
        next(err)
    }
}


const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        if(!user) return next(new Error("User not found"));
        res.status(200).json({
            data: null,
            message: "User has been deleted"
        })
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}