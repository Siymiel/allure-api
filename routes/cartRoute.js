const router = require("express").Router()
const { addProduct, updateCartProduct, deleteCartProduct, getCartUser, getAllCart } = require("../controllers/cartController")
const { allowIfLoggedIn, grantAccess } = require("../middlewares/accessMiddlewares")

router.route("/")
.get(allowIfLoggedIn, grantAccess('readOwn', 'cart'), getAllCart)
.post(allowIfLoggedIn, grantAccess('createOwn', 'cart'), addProduct)

router.route("/:id")
.put(allowIfLoggedIn, grantAccess('updateOwn', 'cart'), updateCartProduct)
.delete(allowIfLoggedIn, grantAccess('deleteOwn', 'cart'), deleteCartProduct)

router.get("/:userId", allowIfLoggedIn, getCartUser)

module.exports = router;