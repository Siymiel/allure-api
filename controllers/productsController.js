const Product = require("../models/Product")
const { getAllProducts, createProduct, updateProduct, findProduct } = require("../services/productService")

//@desc GET all Products
//@route /api/v1/products
//@access Public
const getProductsHandler = async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;

    try {
        let products;
        if(qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5);
        } else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory]
                }
            })
        } else {
            products = await getAllProducts()
        }
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err)
    }
};

//@desc Create Product - POST
//@route /api/v1/products/create
//@access Private
const createProductHandler = async (req, res) => { 
    const product = await createProduct(req.body)
    res.status(200).json(product)
};

//@desc Edit Product - POST
//@route /api/products/update/:slug
//@access Private
const updateProductHandler = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true});
        if(!updatedProduct) throw new Error(`Error, product ${slug} not found`);
        res.status(200).json(updatedProduct);
    } catch (err) {
        throw new Error("Error updating product");
    }
}

const findProductHandler = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product) throw new Error(`Product ${req.params.id} not found`);
        res.status(200).json(product);
    } catch (err) {
        throw new Error("Error finding product");
        res.status(404).json({message: "Product not found"});
    }
}

const deleteProductHandler = async (req, res) => {
    try {
        const product = await Product.findByIdAndRemove(req.params.id);
        if(!product) throw new Error(`Product ${req.params.id} not found`);
        res.status(200).json({message: "Product deleted"});
    } catch (err) {
        throw new Error("Error deleting product");
    }
}

module.exports = {
    getProductsHandler,
    createProductHandler,
    updateProductHandler,
    findProductHandler,
    deleteProductHandler
}