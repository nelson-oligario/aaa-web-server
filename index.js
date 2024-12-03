const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const serverless = require('serverless-http');
const User = require('./models/user')
require('dotenv').config()


mongoose.connect(process.env.DB_URI, {tls: true,
    autoSelectFamily: false});
 
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Database Connected'))

app.use(express.urlencoded({ extended: true }));

app.use(express.json())



app.get('/', async (req, res) => {
    console.log('Request received at /');
    try {
        res.send("Hello World");
        console.log('Response sent successfully');
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.post('/', async (req,res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        registrationLevel: req.body.registrationLevel,
        events: req.body.events,
        accomodation: req.body.accomodation,
        hasdietaryRestriction: req.body.hasdietaryRestriction,
        accomList: req.body.accomList,
    })
    try{
        const newUser = await user.save()
        res.status(201).send("Request Sent!")
    }
    catch{
        res.status(400).json({message: err.message})
    }
})

app.listen(3000, () => {
   console.log('Server Online')
})

// module.exports = serverless(app);