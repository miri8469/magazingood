const User = require('../model/user')

const SignUp = (req, res) => {
    const newUser = new User(req.body)
    newUser.save().then(u => {
        console.log(u);
        res.send(u)
    }).catch(err => {
        console.log(err)
    })
}

module.exports = { SignUp }