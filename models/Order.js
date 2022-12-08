import mongoose from 'mongoose'
import OrderSchema from '../schemas/orderSchema'

const OrderModel = mongoose.model("Order", OrderSchema)

export default OrderModel