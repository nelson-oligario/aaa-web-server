const mongoose = require('mongoose')
const { type } = require('os')

const userSchema = new mongoose.Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    registrationLevel: {
        type: String
    },
    events: {
        type: String
    },
    accomodation: {
        type: String
    },
    hasdietaryRestriction: {
        type: String
    },
    accomList: {
        type: String
    }  
})

module.exports = mongoose.model('User', userSchema)