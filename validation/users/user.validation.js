const { user } = require("./user.schema");

module.exports = {
    addUserValidation: async (req, res, next) => {
        const value = await user.validate(req.body);
        if (value.error) {
            res.status(400).json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    }
};