'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar rutas
var userRoutes = require('./Routes/userRoute');
var bookRoutes = require('./Routes/bookRoute');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());// Convertir a objetos json los datos que llegan de las peticiones http

//Configurar cabeceras http

//Cargar rutas base
app.use('/api', userRoutes);
app.use('/api', bookRoutes);

module.exports = app;