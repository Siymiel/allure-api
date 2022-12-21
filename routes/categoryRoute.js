const router = require('express').Router()
const { createCategory, updateCategory, deleteCategory, getCategories, getCategory } = require('../controllers/categoryControllers')
const { allowIfLoggedIn, grantAccess } = require("../middlewares/accessMiddlewares")
const {addCategoryValidation} = require("../validation/category/category.validation")

router.route('/')
.get(getCategories)
.post(allowIfLoggedIn, grantAccess('createAny', 'category'), addCategoryValidation, createCategory)

router.route('/:id')
.get(allowIfLoggedIn, getCategory)
.put(allowIfLoggedIn, grantAccess('updateAny', 'category'), updateCategory)
.delete(allowIfLoggedIn, grantAccess('deleteAny', 'category'), deleteCategory);
// .get(allowIfLoggedIn, grantAccess('readAny', 'category'), getCategory)

module.exports = router
