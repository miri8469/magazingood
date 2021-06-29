const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
const router = require('./route/api')
const jwt = require('jsonwebtoken')
const cors = require('cors')

const connectionParams = {
    useFindAndModify: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
}
mongoose.connect(process.env.DB_CONNECT, connectionParams).then(() => {
    console.log('Connected!!!');
}).catch(err => {
    console.log(err);
})



app.use(bodyParser.json())
app.use(cors())
app.use('/', router)
app.listen(3007, () => {
    console.log('listen to 3007!');
})