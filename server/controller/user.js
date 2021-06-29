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

const SignIn =(req,res)=>{
    User.findOne({name: req.body.name, password: req.body.password})
    .then(user => {
        console.log(user);
        res.status(200).json({user:user})
    }).catch(err => {
        console.log(err)
        res.status(500).json({err:err})
    })
}


module.exports={SignUp, SignIn}