'use strict'

var express = require('express');//Importing express 
var api = express.Router();
var UserController = require('../Controllers/userCtrl');//Importing userController
var midAuth = require('../Middlewares/authentication');

api.post('/register', UserController.createUser);
api.post('/login', UserController.loginUser);

module.exports = api;
