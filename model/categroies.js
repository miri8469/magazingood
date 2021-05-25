const Mongoose = require("mongoose");

const categroiesSchema = Mongoose.Schema({
    name: {
        type: String
    },
    // magazinId:{
    //     type: Mongoose.Types.ObjectId,
    //     ref: 'magazin'
    // },
    posts: [{
        type: Mongoose.Types.ObjectId,
        ref: 'post'

    }]

})
module.exports = Mongoose.model('categroies', categroiesSchema)