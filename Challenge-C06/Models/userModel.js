'use strict'

var mongoose = require('mongoose');//Importing mongoose
var Schema = mongoose.Schema;//Importing mongoose schema

var UserSchema = Schema({//Creating a schema for the user
    role: String,
    name: String,
    lastName: String,
    email: String,
    password: String
});

module.exports = mongoose.model('User', UserSchema);