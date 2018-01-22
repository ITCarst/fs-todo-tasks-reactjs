const express = require('express');
const cors = require('cors');
const path = require ('path');
const bodyParser = require('body-parser');

const config = require(path.join(__dirname + '/../config/config'));
const middleware = require('./middleware/middleware');
const api = require('./api');

const app = express();

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(cors());
app.use(express.static(path.join(__dirname + '/../public')));
app.use('/', api);

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});
app.listen(config.appPort, () => {
    console.info('App server is up on %s port', config.appPort);
});

module.exports = app;
