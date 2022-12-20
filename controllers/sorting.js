const cards = require('../data/cards')
const sorting = require('../helpers/sorting')

exports.sortingCards = (req, res) => { // this function is to show the cards in order (JSON format)
        const { from, to } = req.body

        let trip = sorting.sorting(cards, from, to)
        if (trip) {
            res.status(200).json({
                result: trip
            });
        } else {
            res.status(404).json({
                result: "Trip not found"
            });
        }

    }
    /*
    exports.sortingCards = (req, res) => {
        const { from, to } = req.body
        let table = []
        let lastCard
        let sup = false
        let nb_iteration = factorial.factorial(Object.keys(cards).length)
        cards.forEach(function(card, index, object) {
            if (card.From == from && lastCard != to) {
                table = []
                table.push(card)
                lastCard = card.To
                let loop = 0
                while (lastCard != to && loop < nb_iteration) {
                    loop = loop + 1
                    cards.forEach(function(cardi, indexi, objecti) {
                        sup = false
                        if (cardi.From == lastCard && lastCard != to) {
                            cards.forEach(function(cardii, indexii, objectii) {
                                if (cardi.To == cardii.From || cardi.To == to) {
                                    sup = true
                                    lastCard = cardi.To
                                }
                            })
                            if (sup == false && cardi.To != to) {
                                objecti.splice(indexi, 1);

                            } else {
                                table.push(cardi)
                            }
                        }

                    })
                }
            }
        });
        if (table != []) {
            let output = ""
            table.forEach(card => {
                switch (card.MeanOfTransportation) {
                    case "Bus":
                        output = output + "Take the bus from " + card.From + " to " + card.To + ". " + card.Comment + " \n "
                        break
                    case "Train":
                        output = output + "Take train " + card.Reference + " from " + card.From + " to " + card.To + ". Sit in seat " + card.ComplementInfo.Seat + "." + card.Comment + " \n "
                        break
                    case "Plane":
                        let bagage
                        card.ComplementInfo.Baggage != null ? bagage = ". Baggage drop at ticket counter " + card.ComplementInfo.Baggage : bagage = ". Baggage will we automatically transferred from your last leg."
                        output = output + "From " + card.From + ", take flight " + card.Reference + " to " + card.To + ". Gate" + card.ComplementInfo.Gate + ", seat " + card.ComplementInfo.Seat + bagage + ". " + card.Comment + " \n "
                        break
                }
            });
            output = output + "You have arrived at your final destination. \n"
            res.status(200).json({
                message: output
            });
        } else {
            res.status(400).json({
                message: "No trip found"
            });
        }

    }*/