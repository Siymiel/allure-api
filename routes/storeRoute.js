const router = require("express").Router();
const { createStore, updateStore, deleteStore, getStore, getAllStores, getStoreOwner, getStoreMonthlyIncome } = require("../controllers/storeController")

router.post('/', createStore);
router.put('/:id', updateStore);
router.delete('/:id', deleteStore);
router.get('/', getAllStores);
router.get(':/id', getStore);
router.get('/:userId', getStoreOwner);
router.get("/income", getStoreMonthlyIncome);
