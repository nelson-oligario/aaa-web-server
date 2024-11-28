const express = require('express')
const app = express()
const mongoose = require('mongoose')
const serverless = require('serverless-http');
require('dotenv').config()


mongoose.connect(process.env.DB_URI, {tls: true,
    serverSelectionTimeoutMS: 3000,
    autoSelectFamily: false});
 
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Database Connected'))

app.use(express.urlencoded({ extended: true }));

app.use(express.json())

const userRouter = require('../routes/users')
app.use('/users', userRouter)

app.get('/', async (req,res) => {
    res.send("Hello World")
})

// app.listen(3000, () => {
//    console.log('Server Online')
// })

module.exports = serverless(app);