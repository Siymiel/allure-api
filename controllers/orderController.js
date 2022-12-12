const Order = require("../models/Order")

// GET Monthly Income
const getMontlyIncome = async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await Order.aggregate([
            { 
                $match: { createdAt: { $gte: previousMonth }} 
            },
            { 
                $project: { month: {$month: "$createdAt"}, sales: "$amount" }
            },
            {
                $group: { _id: "$month", total: { $sum: "$sales" } }
            }
        ]);
        res.status(200).json(income);
    } catch (err) {
        res.status(500).json(err) 
    }
}

// CREATE
const createOrder = async (req, res) => {
    const newOrder = new Order(req.body)

    try {
        const savedOrder = await newOrder.save();
        if(!savedOrder) res.status(404).json({ message: 'Error saving order'});
        res.status(200).json(savedOrder)
    } catch (err) {
        res.status(500).json(err, { message: "Error creating order" })
    }
}

// Update
const updateOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        if(!order) res.status(404).json({ message: 'Order not found' })
        res.status(200).json(order)
    } catch (err) {
        res.status(500).json(err, { message: "Error updating order" })
    }
}

// Delete
const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndRemove(req.params.id)
        if(!order) res.status(404).json({ message: 'Order not found' })
        res.status(200).json(order)
    } catch (err) {
        res.status(500).json(err, { message: "Error deleting order" })
    }
}

// Get user's order
const getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId })
        if (!orders) res.status(404).json({ message: 'Order not found' })
        res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err, { message: "User's orders not found" })
    }
}

// Get all
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()
        if (!orders) res.status(404).json({ message: 'Order not found' })
        res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err, { message: "Ordes not found" })
    }

}

module.exports = {
    getMontlyIncome,
    createOrder,
    updateOrder,
    deleteOrder,
    getUserOrders,
    getAllOrders
}