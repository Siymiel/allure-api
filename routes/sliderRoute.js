const router = require('express').Router()
const { createSliderItem, updateSliderItem, deleteSliderItem, getAllSliderItems } = require('../controllers/sliderController')

router.route('/')
.get(getAllSliderItems)
.post(createSliderItem);

router.route("/:id")
.put(updateSliderItem)
.delete(deleteSliderItem)

module.exports = router;