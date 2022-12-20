const express = require('express');
const router = express.Router();

const sorting_cards = require('../controllers/sorting');

router.post('/', sorting_cards.sortingCards);


module.exports = router;