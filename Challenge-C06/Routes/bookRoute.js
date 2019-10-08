'use strict'

var express = require('express');//Importing express
var api = express.Router(); 
var BookController = require('../Controllers/bookCtrl');
var midAuth = require('../Middlewares/authentication');

api.get('/getBook', midAuth.userAuth, BookController.getBook);
api.get('/getAllBooks', midAuth.userAuth, BookController.getAllBooks);
api.post('/lendBook', midAuth.userAuth, BookController.lendBook);

module.exports = api;