const router = require('express').Router();
const http = require('http');
const url = require('url');
const path = require ('path');

const { apiURL, appPort } = require(path.join(__dirname + '/../../config/config'));

exports.copyHeaders = (source, target) => {
    for (let header in source.headers) {
        target.setHeader(header, source.headers[header]);
    }
};

router.all('/api/:resource(tasks)*', (req, res) => {
	const { hostname, port } = url.parse(`http://${apiURL}:${appPort}`);
	const { method, originalUrl } = req;
	const uri = originalUrl.replace('/api', '');
    const serverRequest = http.request({
        port, hostname, method,
        path: uri
    });

    exports.copyHeaders(req, serverRequest);

    serverRequest.on('response', serverResponse => {
        res.statusCode = serverResponse.statusCode;
        exports.copyHeaders(serverResponse, res);
        serverResponse.pipe(res);
    });

    serverRequest.on('error', err => {
        console.log(err)
        res.end();
    });

    req.pipe(serverRequest);
});

module.exports = router;
