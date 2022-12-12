import mongoose from "mongoose";
import CartSchema from "../schemas/cartSchema";

const CartModel = new mongoose.model("Cart", CartSchema)

export default CartModel;