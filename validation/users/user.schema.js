const joi = require("@hapi/joi")

const schema =  {
    user: joi.object({
        firstname: joi.string().max(100).required(),
        lastname: joi.string().max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).required(),
        role: joi.string().valid("user", "vendor", "admin").required(),
        status: joi.string().valid("true", "false")
    })
};

module.exports = schema;