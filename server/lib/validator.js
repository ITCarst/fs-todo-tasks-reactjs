const { InvalidId } = require('./errors');

exports.validateId = objectId => {
    return new Promise((resolve, reject) => (
        (!Number.isNaN(parseInt(objectId, 10))) ? resolve(objectId) : reject(new InvalidId(objectId))
    ));
};
