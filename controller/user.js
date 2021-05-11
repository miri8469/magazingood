const User = require('../model/user')
const Admin = require('../model/admin')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
//const router = require('./routes/api')

const signUp = (req, res) => {
    const user = new User(req.body)
    user.save().then((user1) => {
        sendMail(user1.email, user1.name)
        console.log('user added!!!');
        Admin.findByIdAndUpdate(user1.adminId, { $push: { 'userId': user1._id } }, { new: true })
            .then(() => {
                console.log('uygyguijo');
                res.json({ user: user1 })
            })
    }).catch(err => {

        console.log('error, not added', err);
    })
}
const loginUser = (req, res) => {

    User.findById(req.params.id).then(user => {
        console.log(user,'user excist in the DB');
        let token = jwt.sign({ user: user.name, password: user.password }, process.env.SECRET)
        res.send({ user: user, token: token })

    }).catch(err => {
        console.log('hggg', err);
    })
}

// const MyJwt = () => {
//     // SECRET = 1234
//     let token = jwt.sign({ name: 'bat7', password: '123' }, process.env.SECRET)
//     console.log(token);
//     let result = jwt.verify(token, '1234')
//     console.log(result);
// }
// MyJwt()

function sendMail(mail, name) {
    console.log(mail);
    console.log(name);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'batshevaz20@gmail.com',
            pass: 'Btshz206!'
        }
    });

    var mailOptions = {
        from: 'batshevaz20@gmail.com',
        to: mail,
        subject: 'wellcome',
        text: `hellow ${name}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('error', error);
            console.log(mailOptions);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = { signUp, loginUser }