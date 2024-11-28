const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', async (req,res) => {
    res.send("Hello World")
    try{
        const users = await User.find()
        res.json(users)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }
})

router.post('/', async (req,res) => {
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

module.exports = router