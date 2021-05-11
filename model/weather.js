const  Mongoose  = require("mongoose");

const weatherSchema = Mongoose.Schema({

        temp: {type:Number},
        feels_like: {type:Number},
        temp_min:{type:Number},
        temp_max: {type:Number},
        pressure: {type:Number},
        humidity: {type:Number},
    wind: {
        speed: {type:Number},
        deg: {type:Number}
    },
    userId:{
        type:Mongoose.Types.ObjectId,
        ref:'user'
    }
})
module.exports = Mongoose.model('weather',weatherSchema)