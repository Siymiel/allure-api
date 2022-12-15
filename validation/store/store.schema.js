const joi = require("@hapi/joi");

const schema = {
    store: joi.object({
        userId: joi.string().required(),
        name: joi.string().min(3).max(100).required(),
        desc: joi.string().required(),
        products: joi.array().required(),
        image: joi.string().required()
    })
};

module.exports = schema;