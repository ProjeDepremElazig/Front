const model = require("Deprem/exchangeModel"); 
async function RecordExchangeParamaters(target,destination) {
    console.id(target,destination);
    var s =  await new model(
        {
            ExchangeType: {target:target.Target, destination:target.Destination},
            ExchangeValue: {target:destination.Target, destination:destination.Destination}
        }
        ).save();
    console.id(s);
}
module.exports = {
    RecordExchangeParamaters
}

