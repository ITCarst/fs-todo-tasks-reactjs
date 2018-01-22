const { ApiError, NotPermittedError } = require('../lib/errors');

exports.requestErrorHandler = function(next, err) {
    return err instanceof ApiError ?
        this.status(err.status || 500).json(err.json()) :
        next(err);
};

exports.notPermittedError = (req, res) => {
    const error = new NotPermittedError();
    return res.status(error.status).json(error.json());
};
