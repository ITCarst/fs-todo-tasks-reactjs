const http = require('http');
const url = require('url');
const config = require('../../config/config');

exports.copyHeaders = (source, target) => {
    for (let header in source.headers) {
        target.setHeader(header, source.headers[header]);
    }
    target.setHeader('access-control-allow-origin', '*');
};

exports.promisify = (object, method, ret) => {
    return (...args) => {
        return new Promise((resolve, reject) => {
            object[method].call(object, ...args, (err, result) => {
                return err ? reject(err) : resolve(ret ? ret : result);
            });
        });
    };
};
