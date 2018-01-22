const path = require('path');

module.exports = {
    env: process.env.NODE_ENV || 'development',
    appPort: process.env.PORT || 8081,
    apiURL: process.env.APIURL  || 'localhost',
    persitancePath: process.env.PERSITANCE || path.resolve('./server/persistance/')
};
