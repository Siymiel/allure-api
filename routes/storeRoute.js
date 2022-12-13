const router = require("express").Router();
const { createStore, updateStore, deleteStore, getStore, getAllStores, getStoreOwner, getStoreMonthlyIncome } = require("../controllers/storeController")
const { allowIfLoggedIn, grantAccess } = require("../middlewares/accessMiddlewares")

router.route("/")
.get(allowIfLoggedIn, grantAccess('createOwn', 'store'), createStore)
.post( grantAccess('readAny', 'store'), getAllStores);

router.route("/:id")
.get(getStore)
.put(allowIfLoggedIn, grantAccess('updateOwn', 'store'), updateStore)
.delete(allowIfLoggedIn, grantAccess('deleteOwn', 'store'), deleteStore);

router.get('/:userId', allowIfLoggedIn, grantAccess('readAny', 'store'), getStoreOwner);
router.get("/income", allowIfLoggedIn, grantAccess('createOwn', 'store'),  getStoreMonthlyIncome);
