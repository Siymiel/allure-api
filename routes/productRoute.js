const { getProductsHandler, createProductHandler, updateProductHandler, findProductHandler, deleteProductHandler } = require('../controllers/productsController')
const router = require("express").Router();

router.get('/', getProductsHandler);
router.post('/create', createProductHandler);
router.get("/:id", findProductHandler)
router.put('/:id', updateProductHandler)
router.delete('/:id', deleteProductHandler)

module.exports = router