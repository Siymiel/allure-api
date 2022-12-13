const bcrpyt = require('bcrypt');

// Encrypt password
async function hashPassword(password) {
    return await bcrpyt.hash(password, 10);
}

// Validate password
async function validatePassword(password, hashPassword) {
    return await bcrpyt.compare(password, hashPassword);
}

module.exports = {
    hashPassword,
    validatePassword
}