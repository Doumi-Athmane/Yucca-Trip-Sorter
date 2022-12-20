const cards = require('../data/cards')
const sorting = require('../helpers/sorting')
const display = require('../helpers/display')


exports.displayCards = (req, res) => { //This function is to write the final response (Text format)
    const { from, to } = req.body

    let trip = sorting.sorting(cards, from, to) //Get the sorted cards
    if (trip) {
        let output = display.display(trip); //Get the final output design
        res.status(200).json({
            result: output
        });
    } else {
        res.status(404).json({
            result: "Trip not found"
        });
    }

}