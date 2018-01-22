class ApiError extends Error {
    json() {
        console.log(`${new Date().toLocaleString()}, ${this.status}:
            ${this.originalError ? this.originalError.message : this.message}`);
        
        return {
            error: this.message
        };
    }
}

exports.ApiError = ApiError;

exports.InvalidId = class InvalidId extends ApiError {
    constructor(objectId) {
        super();
        this.status = 400;
        this.message = `${objectId} is not a valid id`;
    }
};

exports.ItemNotFound = class ItemNotFound extends ApiError {
    constructor(objectId) {
        super();
        this.status = 404;
        this.message = `No item found with ${objectId} id`;
    }
};

exports.InvalidBody = class InvalidBody extends ApiError {
    constructor() {
        super();
        this.status = 400;
        this.message = `Invalid or empty request body`;
    }
};

exports.FileError = class FileError extends ApiError {
    constructor(err) {
        super();
        this.originalError = err;
        this.status = 404;
        this.message = `Error reading the file`;
    }
};
