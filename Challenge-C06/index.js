'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/booksdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    (err, res) => {
        if (err) {
            throw err;
        } else {
            console.log("api rest server listening correctly from the port ");
            app.listen(port, function () {
                console.log("Servidor del API rest escuchando en http://localhost:" + port);
            })
        }
    });

