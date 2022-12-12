const Store = require("../models/Store")

// Create
const createStore = async (req, res) => {
    const newStore = new Store(req.body)

    try{
        const savedStore = await newStore.save()
        if (!savedStore) res.status(404).json({ message: 'Store not found' })
        res.status(201).json(savedStore)
    } catch (err) {
        res.status(500).json({message: err})
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
const getStore = async (req, res) => {
    try {
        const store = await Store.findById(req.params.id)
        if (!store) res.status(404).json({ message: 'Store not found' })
        res.status(200).json(store)
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

// Get all stores
const getAllStores = async (req, res) => {
    try {
        const stores = await Store.find()
        if (!stores) res.status(404).json({ message: 'Stores not found' })
        res.status(200).json(stores)
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


module.exports = {
    createStore,
    updateStore,
    deleteStore,
    getStore,
    getAllStores,
    getStoreOwner
}