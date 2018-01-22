const router = require('express').Router();
const tasks = require('./tasks');
const proxy = require('./proxy');

router.use(tasks);
router.use(proxy);

module.exports = router;
