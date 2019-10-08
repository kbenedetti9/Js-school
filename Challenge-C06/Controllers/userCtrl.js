'use strict'

var User = require('../Models/userModel');//Importing userModel to create a new user
var bcrypt = require('bcryptjs');//Importing bcrypt to encript the passwords
var jwt = require('../Services/jwt');//Importing jwt

function createUser(req, res) {//Function to create a new user
    var user = new User();

    var params = req.body;//Obtaining the parameters from the request (the data)
    //Passing the data to the new user
    user.role = "client";
    user.name = params.name;
    user.lastName = params.lastName;
    user.email = params.email;

    if (params.password) {//If the user type the password
        bcrypt.hash(params.password, 10, function (err, hash) {//Encriptying the password
            user.password = hash;//Giving the user the new encripted password
            
            if (user.name && user.email && user.lastName) {
                user.save((err, userStored) => {//Saving the user in the database
                    if (err) {
                        res.status(500).send({ message: "ERROR: Saving user" });
                    } else {
                        if (!userStored) {
                            res.status(404).send({ message: "The user could not be registered" });
                        } else {//Suceess case
                            res.status(200).send({ user: userStored, message: "The user was successfully created" });
                        }
                    }
                });
            } else {
                res.status(200).send({ message: "Please, All the fields are required" });
            }
        });
    } else {//If the user didnt type the password
        res.status(500).send({ message: "Please, Type your password" });
    }
}

function loginUser(req, res) {//Function to log the user
    var params = req.body;

    var email = params.email;
    var password = params.password;

    if (!email || !password) {
        res.status(200).send({ message: "Please, All the fields are required" });
    } else {
        User.findOne({ email: email.toLowerCase() }, (err, user) => {
            if (err) {
                res.status(500).send({ message: "ERROR: Login" });

            } else {
                if (!user) {
                    res.status(404).send({ message: "The user doesnt exists" });
                } else {
                    bcrypt.compare(password, user.password, function (err, check) {//Comparing the password that was tped with the password that corresponds with the email
                        if (check) {
                            if (params.gethash) {
                                res.status(200).send({
                                    token: jwt.createToken(user)
                                });
                            } else {
                                res.status(200).send({ user, message: "The user was successfully loged in" });
                            }
                        } else {
                            res.status(404).send({ message: "The user could not log in" });
                        }
                    });
                }
            }
        });
    }
}

module.exports = {
    createUser,
    loginUser
};