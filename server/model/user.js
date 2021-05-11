const Mongoose = require("mongoose");

const UserSchema = Mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    adminId: {
        type: Mongoose.Types.ObjectId,
        ref: 'admin'
    },
    weatherId: [{
        type: Mongoose.Types.ObjectId,
        ref: 'weather'

    }]

})
module.exports = Mongoose.model('user', UserSchema)