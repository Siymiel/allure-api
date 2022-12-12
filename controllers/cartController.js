const Cart = require("../models/Cart")

// Create
const createCartProduct = async (req, res) => {
    const newCart = new Cart(req.body)

    try {
        const savedCart = await newCart.save();
        if (!savedCart) res.status(400).json({message: "Product not found"})
        res.status(200).json(savedCart)
    } catch (err) {
        res.status(500).json({message: "Could not save product"})
    }
};

// Update
const updateCartProduct = async (req, res) => {
    try {
        const updateCart = await Cart.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        if (!updateCart) res.status(400).json({message: "Product not found"})
        res.status(200).json(updateCart)
    } catch (err) {
        res.status(500).json({message: "Could not update product"})
    }
}

// Delete
const deleteCartProduct = async (req, res) => {
    try {
        const deleteCart = await Cart.findByIdAndRemove(req.params.id)
        if(!deleteCart) res.status(400).json({message: "Product not found"});
        res.status(200).json(deleteCart)
    } catch (err) {
        res.status(500).json({message: "Could not delete product"}, err)
    }
}

// Get cart user
const getCartUser = async (req, res) => {
    try {
        const cartUser = await Cart.find({ userId: req.user.userId })
        if (!cartUser) res.status(400).json({message: "User not found"})
        res.status(200).json(cartUser)
    } catch (err) {
        res.status(500).json({message: "Could not get user"}, err)
    }
}

// Get all carts
const getAllCart = async (req, res) => {
    try {
        const carts = await Cart.find()
        if (!carts) res.status(400).json({message: "Carts not found"});
        res.status(200).json(carts)
    } catch (err) {
        res.status(500).json({message: "Could not find cart"}, err)
    }
}


module.exports = {
    createCartProduct,
    updateCartProduct,
    deleteCartProduct,
    getCartUser,
    getAllCart
}