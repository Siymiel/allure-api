import mongoose from "mongoose";
import productSchema from "../schemas/productSchema";

const ProductModel = new mongoose.model("Product", productSchema)

export default ProductModel