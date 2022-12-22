const Slider = require('../models/Slider');

// CREATE
const createSliderItem = async (req, res) => {
    const newSliderItem = new Slider(req.body)
    try {
        const savedSliderItem = await newSliderItem.save()
        if(!savedSliderItem) res.status(404).json({ message: 'Error saving slider item'});
        res.status(200).json(savedSliderItem)
    } catch (err) {
        res.status(500).json(err, { message: "Error creating order" });
    }
};

// UPDATE
const updateSliderItem = async (req, res) => { 
    try {
        const updatedSliderItem = await Slider.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        if(!updatedSliderItem) res.status(404).json({ message: 'Slider item not found' });
        res.status(200).json(updatedSliderItem)
    } catch (err) {
        res.status(500).json(err, { message: "Error updating slider item" });
    }
};

// DELETE
const deleteSliderItem = async (req, res) => {
    try {
        const deletedSliderItem = await Slider.findByIdAndRemove(req.params.id)
        if(!deletedSliderItem) res.status(404).json({ message: 'Slider item not found' });
        res.status(200).json({ message: "Slider item deleted" })
    } catch (err) {
        res.status(500).json(err, { message: "Error deleting slider item" });
    }
};

// ALL SLIDER ITEMS
const getAllSliderItems = async (req, res) => {
    try {
        const sliderItems = await Slider.find()
        if(!sliderItems) res.status(404).json({ message: 'Slider items not found' });
        res.status(200).json(sliderItems)
    } catch (err) {
         res.status(500).json(err, { message: "Error getting slider items" })
    }
};

module.exports = {
    createSliderItem,
    updateSliderItem,
    deleteSliderItem,
    getAllSliderItems
}