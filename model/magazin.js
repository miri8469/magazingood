const Mongoose = require("mongoose");

const MagazinSchema = Mongoose.Schema({
    name: {
        type: String
    },
    picture: {
        type: String
    },
    title: {
        type: String
    }, body_1: {
        type: String
    },
    body_2: {
        type: String
    },
    categoreis: [{
        type: Mongoose.Types.ObjectId,
        ref: 'category'
    }],
    posts:[{
        type: Mongoose.Types.ObjectId,
        ref: 'post'
    }]
})
module.exports = Mongoose.model('magazin', MagazinSchema)