const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const router = require('./route/api')
const jwt = require('jsonwebtoken')


const connectionParams = {
    // useFindAndModify: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
}
mongoose.connect(process.env.DB_CONNECT, connectionParams).then(() => {
    console.log('Connected!!!');
}).catch(err => {
    console.log(err);
})


// app.use('/', function (req, res, next) {
//     console.log('middleWare');
//     console.log('the path is : ', req.path);
//     if (!req.path.startsWith('/login') && req.path !== 'signUp')
//         try {
//             console.log('All functions except login and signUp');
//             jwt.verify(req.headers['authorization'], process.env.SECRET)
//             console.log('jwt good');
//             next()
//         }
//         catch (err) {
//             console.log(err);
//             res.send('not login')
//         }
//     else {
//         next()
//     }
// })
app.use('/', router)
app.listen(3007, () => {
    console.log('listen to 3007!');
})