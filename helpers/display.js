function display(sorted_cards) { //Function that design the output like the exemple given
    let output = ""
    sorted_cards.forEach(card => {
        switch (card.MeanOfTransportation) { //Our output changes when the MeanOfTransportation changes
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
                //We can add MeanOfTransportation case us we need
        }
    });
    output = output + "You have arrived at your final destination. \n"
    return output
}

module.exports = { display };