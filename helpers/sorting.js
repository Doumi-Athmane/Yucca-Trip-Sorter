const factorial = require('./helpers_functions')

function sorting(cards, from, to) {
    let table = [] //Initialize response
    let lastCard
    let sup = false
    let nb_iteration = factorial.factorial(Object.keys(cards).length) // Get the max number of iterations 
    cards.forEach(function(card, index, object) {
        if (card.From == from && lastCard != to) { //Get the first card based on From field
            table = []
            table.push(card) //Add the first card to the table response
            lastCard = card.To
            let loop = 0
            while (lastCard != to && loop < nb_iteration) { //We repeat the process until we arrive to out destination or do the max number of iterations 
                loop = loop + 1
                cards.forEach(function(cardi, indexi, objecti) {
                    sup = false
                    if (cardi.From == lastCard && lastCard != to) { //Compare the depart with the last destination card
                        cards.forEach(function(cardii, indexii, objectii) { //For each card we have to pass all other cards
                            if (cardi.To == cardii.From || cardi.To == to) {
                                sup = true
                                lastCard = cardi.To
                            }
                        })
                        if (sup == false && cardi.To != to) { //If the card doesn't have another trip to follow we drop it
                            objecti.splice(indexi, 1);

                        } else {
                            table.push(cardi) //Add the card to the response
                        }
                    }

                })
            }
        }
    });
    return table
}

module.exports = { sorting };