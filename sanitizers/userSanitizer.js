const sanitizeUserOnRegistration = (user) => {
    let sanitizedUser = {};  

    sanitizedUser.firstname = sanitizeName(user.firstname)
    sanitizedUser.lastname = sanitizeName(user.lastname)
    sanitizedUser.email = sanitizeEmail(user.email)
    sanitizedUser.password =  user.password
    sanitizedUser.role = user.role || 'user'
    return sanitizedUser;
}

// Serves firstname and lastname
const sanitizeName = (name) => {
    if (name === undefined) {
        throw new Error(`${name} is undefined`)
    } else if (typeof name !== 'string') {
        throw new Error(`${name} must be a string`)
    }

    name = name.trim();
    if (name.length < 3) {
        throw new Error(`${name} must be at least 3 characters`);
    }
    if (name.length > 50) {
        throw new Error(`${name} mut be less than 50 characters`);
    }

    return name;
}

const sanitizeEmail = (email) => {
    email = email.trim();
    if (email === undefined) {
        throw new Error(`${email} is undefined`)
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        throw new Error(`${email} must be a valid email address`);
    }

    if (email.length < 3) {
        throw new Error(`${email} must be at least 3 characters`);
    } else if (email.length > 50) {
        throw new Error(`${email} mut be less than 50 characters`);
    }
    return email
}

module.exports = {
    sanitizeUserOnRegistration
}