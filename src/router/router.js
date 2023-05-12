const express = require('express');

const router = express.Router();

router.get('/', require('../controllers/index'));

router.get('/random-number-in-range/:min([0-9]+)/:max([0-9]+)', require('../controllers/randomNumberInRange'));

router.get('/random-person', require('../controllers/randomPerson'));

router.get('/string-details', require('../controllers/stringDetails'));

module.exports = router;