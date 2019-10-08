'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = Schema({
    id: String,
    isbn: Number,
    title: String,
    author: String,
    pages: Number,
    date: String,
    summary: String,
    rating: Number,
    city: String,
    state: Boolean,
    type: String
    //image
});

module.exports = mongoose.model('Book', BookSchema);