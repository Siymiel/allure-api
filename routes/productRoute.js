const { getProductsHandler, createProductHandler, updateProductHandler, findProductHandler, deleteProductHandler } = require('../controllers/productsController')
const router = require("express").Router();

router.route('/').get(getProductsHandler).post(createProductHandler);
router.route("/:id").get(findProductHandler).put(updateProductHandler).delete(deleteProductHandler)

module.exports = router