import ProductModel from "../models/Product";
import { sanitizeProduct } from "../sanitizers/productSanitizers";

// @desc Get all products
// @conntroller - getProductsController
export async function getAllProducts() {
    try {
        const products = await ProductModel.find();
        if(!products) throw new Error("Products not found")
    } catch (err) {
        throw new Error('Error getting products');
    }
};

// @desc Create a  product
// @controller - createProductController
export async function createProduct(product) {
    const sanitizeProduct = sanitizeProduct(product)

    try {
        const newProduct = await ProductModel.create(sanitizeProduct);
        if(!newProduct) throw new Error("Product not created");

        return newProduct;
    } catch (err) {
        throw new Error("Error creating product");
    }
}