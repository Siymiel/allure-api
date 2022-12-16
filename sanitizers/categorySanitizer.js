const sanitizeCategory = (category) => {
    let sanitizedCategory = {};  

    sanitizedCategory.name = sanitizeName(category.name)
    sanitizedCategory.desc = sanitizeDesc(category.desc)
    sanitizedCategory.isActive = category.isActive || true
    sanitizedCategory.products = category.products

    return sanitizedCategory;
}

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

const sanitizeDesc = (desc) => {
    if (desc === undefined) {
        throw new Error(`${desc} is undefined`)
    }else if(typeof desc !== 'string') {
        throw new Error(`${desc} must be a string`);
    }
    
    desc = desc.trim();
    if (desc.length < 3) {
        throw new Error(`${desc} must be at least 3 characters`);
    } else if (desc.length > 150) {
        throw new Error(`${desc} must be less than 150 characters`);
    }
    return desc
}

module.exports = {
    sanitizeCategory
}