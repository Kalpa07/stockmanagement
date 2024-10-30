// Without any models the DB cannot be created. bz models are structure.

const mongoose = require("mongoose");

//Create Schema
const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    email : {
        type: String,
        unique: true,
        required : true
    },
    mobile : {
        type: Number
    },
    password : {
        type: String,
        required : true
    }
}, {timestamps:true});

//create Model
const User = mongoose.model('User', userSchema);
module.exports = User;

