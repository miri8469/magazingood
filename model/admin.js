const Mongoose = require("mongoose");

const AdminSchema = Mongoose.Schema({
    name: {
        type: String
    },
    userId: [{
        type: Mongoose.Types.ObjectId,
        ref: 'user'
    }]
})
module.exports = Mongoose.model('admin', AdminSchema)