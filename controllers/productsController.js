import asyncHandler from "express-async-handler"
import { createProduct, getAllProducts } from "../services/productService";


// @desc Get products
// @route GET api/v1/products
// @access public
export const getProductsController = asyncHandler(async (req, res) => {
    const products = await getAllProducts();

    res.status(200).json(products);
});

// @desc Create a new product
// @route POST api/v1/products
// @access private
export const createProductController = asyncHandler(async (req, res) => {
    const createdProduct = await createProduct(req.body);

    res.status(200).json(createdProduct);
})