const router = require('express').Router()
const { getMonthlyIncome, createOrder, updateOrder, deleteOrder, getUserOrders, getAllOrders } = require('../controllers/orderController');
const { allowIfLoggedIn, grantAccess } = require("../middlewares/accessMiddlewares")

router.route("/")
.get(allowIfLoggedIn, grantAccess('readOwn', 'order'), getAllOrders)
.post(allowIfLoggedIn, grantAccess('createOwn', 'order'), createOrder);

router.route("/:id")
.put(allowIfLoggedIn, grantAccess('updateOwn', 'order'), updateOrder)
.delete(allowIfLoggedIn, grantAccess('deleteOwn', 'order'), deleteOrder);

router.get("/:userId", allowIfLoggedIn, grantAccess('readAny', 'user'), getUserOrders)
router.get('/income', allowIfLoggedIn, grantAccess('createOwn', 'product'), getMonthlyIncome)

module.exports = router;