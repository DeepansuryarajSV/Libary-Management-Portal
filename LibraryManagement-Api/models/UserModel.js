const mongoose = require('mongoose');

const insertDetails = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

module.exports = mongoose.model('UserDetails', insertDetails);