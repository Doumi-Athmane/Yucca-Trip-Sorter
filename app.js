const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

const sortingCards = require('./routes/sorting.js');
app.use('/api/sortingCards', sortingCards);

const display = require('./routes/display.js');
app.use('/api/displayCards', display);

app.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' });
});

module.exports = app;