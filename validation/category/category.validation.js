const { category } = require("./category.schema")

module.exports = {
    addCategoryValidation: async (req, res, next) => {
        const value = await category.validate(req.body);
        if (value.error) {
            return res.status(400).json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    }
}