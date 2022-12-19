const Product = require("../models/Product")

//@desc - serves getProductsHandler @productsController
const getAllProducts = async () => {
    try {
        const products = await Product.find().populate("categories");
        if (!products) throw new Error("Products not found")
        return products
    } catch (err) {
        throw new Error("Error getting products")
    }
}

//@desc - serves createProductHandler @productsController
const createProduct = async (productDetails) => {
    const newProduct = new Product(productDetails)
    try {
        const savedProduct = await newProduct.save();
        if(!savedProduct) throw new Error("Product not created")
        return savedProduct;
    } catch (err) {
        throw new Error("Error creating product")
    }
};

//@desc - serves updateProductHandler @productsController
const updateProduct = async (id, body) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, { $set: body }, {new: true});
        if(!updatedProduct) throw new Error(`Error, product ${slug} not found`)
        return updatedProduct;
    } catch (err) {
        throw new Error("Error creating product")
    }
};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct
}