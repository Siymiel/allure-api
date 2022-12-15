const Category = require("../models/Category")

const createCategory = async (req, res, next) => {
    try {
        const category = await new Category(req.body)
        category.save((err, result) => {
            if (err) {
                return next(err)
            }
            res.status(201).json({success: 1, data: result})
        })
    } catch (err) {
        next(err)
    }
}

const updateCategory = async (req, res, next) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        if (!category) throw new Error(`Category ${req.params.id} could not be found`)
        res.status(200).json({success: 1, data: category})
    } catch (err) {
        next(err)
    }
}

const deleteCategory = async (req, res, next) => {
    try {
        const category = await Category.findByIdAndRemove(req.params.id)
        if (!category) throw new Error(`Category ${req.params.id} could not be found`)
        res.status(200).json({success: 1, data: {}, message: "Category deleted"})
    } catch (err) {
        next(err)
    }
}

const getCategories = async (req, res, next) => { 
    try {
        const categories = await Category.find().select(["name", "desc", "products", "isActive", "_id"])
        if (!categories) throw new Error("Categories not found")
        res.status(200).json({success: 1, data: categories})
    } catch (err) {
        next(err)
    }
}

const getCategory = async (req, res, next) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) throw new Error(`Category ${req.params.id} not found`)
        res.status(200).json({success: 1, data: category})
    } catch (err) {
        next(err)
    }
}



module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategories,
    getCategory
}