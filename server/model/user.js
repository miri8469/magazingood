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
    magazins: [{
        type: Mongoose.Types.ObjectId,
        ref: 'magazin'
    }],

})
module.exports = Mongoose.model('user', UserSchema)