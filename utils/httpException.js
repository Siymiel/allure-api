export default class HttpException extends Error {
    constructor(message, status, error) {
        super(message)
        this.message = message
        this.status = status
        this.error = error || null
    }
}
