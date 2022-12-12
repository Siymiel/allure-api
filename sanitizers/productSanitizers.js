import HttpException from "../utils/httpException";

export function sanitizeProduct(product) {
    let sanitizeProduct = {}

    sanitizeProduct.title = sanitizeTitle(product.title)

    return sanitizeProduct;
}

function sanitizeTitle(title) {
    if(title === undefined) {
        throw new HttpException('Title is undefined', 400)
    }
    if(typeof title !== 'string') {
        throw new HttpException('Title is not a string', 400)
    }

    // Attributes
    title = title.trim()
    if (title.length < 3) {
        throw new HttpException("Title must be at least 3 characters", 400);
    }
    if(title.length > 50) {
        throw new HttpException("Title must be less than 50 characters", 400)
    }

    return title;
}