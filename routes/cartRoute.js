const router = require("express").Router()
const { createCartProduct, updateCartProduct, deleteCartProduct, getCartUser, getAllCart } = require("../controllers/cartController")

router.post('/', createCartProduct)
router.get('/', getAllCart)
router.post("/:id", updateCartProduct)
router.post("/:id", deleteCartProduct)
router.get("/:userId", getCartUser)

module.exports = router;