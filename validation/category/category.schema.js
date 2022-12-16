const joi = require("@hapi/joi");

const schema = {
    category: joi.object({
        name: joi.string().min(3).max(100).required(),
        desc: joi.string().required(),
        products: joi.array(),
        image: joi.string()
    })
};

module.exports = schema;