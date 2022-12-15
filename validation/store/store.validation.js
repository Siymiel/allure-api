const { store } = require("./store.schema")

module.exports = {
    addStoreValidation: async (req, res, next) => {
        const value = await store.validate(req.body);
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