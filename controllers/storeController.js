const Store = require("../models/Store")
const logger = require('../utils/winston')

// Create
const createStore = async (req, res) => {
    const newStore = new Store(req.body)

    try{
        const savedStore = await newStore.save()
        if (!savedStore) res.status(404).json({ message: 'Store not found' })
        res.status(201).json(savedStore)
    } catch (err) {
        res.status(500).json({ message: err })
    }
};

// Update
const updateStore = async (req, res) => {
    try {
        const updatedStore = await Store.findByIdAndUpdate(req.params.id, { $set: req.body}, { new: true})
        if (!updatedStore) res.status(404).json({ message: 'Store not found' })
        res.status(200).json(updatedStore)
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

// Delete
const deleteStore = async (req, res) => {
    try {
        const deletedStore = await Store.findByIdAndRemove(req.params.id)
        if (!deletedStore) res.status(404).json({ message: 'Store not found' })
        res.status(200).json({ message: "Store Deleted Successfully"})
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

// Get store
const getStore = async (req, res, next) => {
    try {
        const store = await Store.findById(req.params.id);
        if (!store) res.status(404).json({ message: 'Store not found' })
        res.status(200).json(store)
    } catch (err) {
        next(err)
    }
}

// Get all stores
const getAllStores = async (req, res) => {
    try {
        logger.info("Attempting to get all stores")
        const stores = await Store.find()
        if (!stores) {
            res.status(404).json({ message: 'Stores not found' })
            logger.error("Error: No stores found")
        }
        res.status(200).json(stores)
        logger.info("Success: Stores successfully found")
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

// Get store owner
const getStoreOwner = async (req, res) => {
    try {
        const store = await Store.find({ userId: req.params.userId})
        if (!store) res.status(404).json({ message: 'Store not found' })
        res.status(200).json(store)
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

// Get Store income
const getStoreMonthlyIncome = async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await Store.aggregate([
            {
                $match: { createdAt: { $gte: previousMonth }}
            },
            {
                $project: { month: { $month: "$createdAt" }, sales: "$amount" }
            },
            {
                $group: {
                    _id: "$month",
                    income: { $sum: "$sales" }
                }
            }
        ]);
        res.status(200).json(income)
    } catch (err) {
        res.status(500).json({ message: err })
    }
}


module.exports = {
    createStore,
    updateStore,
    deleteStore,
    getStore,
    getAllStores,
    getStoreOwner,
    getStoreMonthlyIncome
}