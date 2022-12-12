const router = require('express').Router()
const { getMonthlyIncome, createOrder, updateOrder, deleteOrder, getUserOrders, getAllOrders } = require('../controllers/orderController')

router.get('/income', getMonthlyIncome)
router.post('/', createOrder)
router.post('/:id', updateOrder)
router.delete('/:id', deleteOrder)
router.get("/:userId", getUserOrders)
router.get('/', getAllOrders)