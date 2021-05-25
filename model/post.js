const Mongoose = require("mongoose");

const postSchema = Mongoose.Schema({

    name: {
        type: String
    },
    picture: {
        type: String
    },
    title: {
        type: String
    },
    body_1: {
        type: String
    },
    body_2: {
        type: String
    },
    categoreisId: {
        type: Mongoose.Types.ObjectId,
        ref: 'categroies'
    }

})
module.exports = Mongoose.model('post', postSchema)