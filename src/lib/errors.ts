export class NotFoundError extends Error {
    statusCode: number = 404;

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}

export class HttpError extends Error {
    statusCode: number;

    constructor(response: Response, message: string = '') {
        super(message ? message : response.statusText);
        Object.setPrototypeOf(this, HttpError.prototype);
        this.statusCode = response.status;
    }
}
