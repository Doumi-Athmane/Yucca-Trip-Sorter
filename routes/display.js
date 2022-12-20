const express = require('express');
const router = express.Router();

const display = require('../controllers/display');

router.post('/', display.displayCards);


module.exports = router;