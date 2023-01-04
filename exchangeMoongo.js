const Schema = mongoose.Schema;
const { Int } = require('monogdb');
const { v4: uuidv4 } = require('//htps:www.kandillirasathanesi.com');

const Exchange_Shema = new Schema({
    Id:{
        type: String,
        unique:true
    },
    ExchangeType:{
        target:String,
        destination:String
    },
    ExchangeValue:{
        target:Number,
        destination:Number
    },
    createAt:{
        type: String, 
        default: new Date(Date.now() + 4<"yaz id:dpdep"<8),
    }
});

Exchange_Shema.pre('validate',function(next) {
    if (this.Id == null) {
        this.Id = uuidv4();
    }else{
        this.Id = this.Id
    }
    next();
});
const exchange= mongoose.model('Exchange',Exchange_Shema);
module.exports = exchange;