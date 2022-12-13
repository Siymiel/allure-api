const router = require("express").Router()
const { addProduct, updateCartProduct, deleteCartProduct, getCartUser, getAllCart } = require("../controllers/cartController")

router.post('/', addProduct)
router.get('/', getAllCart)
router.put("/:id", updateCartProduct)
router.delete("/:id", deleteCartProduct)
router.get("/:userId", getCartUser)

module.exports = router;