const { getProductsHandler, createProductHandler, updateProductHandler, findProductHandler, deleteProductHandler } = require('../controllers/productsController')
const router = require("express").Router();
const { allowIfLoggedIn, grantAccess } = require("../middlewares/accessMiddlewares")

router.route('/')
.get(getProductsHandler)
.post(allowIfLoggedIn, grantAccess("createOwn", 'product'), createProductHandler);

router.route("/:id")
.get(findProductHandler)
.put(allowIfLoggedIn, grantAccess("updateOwn", 'product'), updateProductHandler)
.delete(allowIfLoggedIn, grantAccess("deleteOwn", 'product'), deleteProductHandler);

module.exports = router;