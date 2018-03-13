//server/server.js


var express = require('express'); // import express module

//routes file **********************
var router = require('./routes/routes.js');
//***********

var path = require('path');

var bodyParser = require('body-parser');

var app = express(); // create the express app
var mongoose = require('mongoose');

//setting view engine*******
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));

// telling express app that our client folder will be used as static folder
app.use(express.static(path.join(__dirname, '../client')));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

//connecting our app with mongoose
var mongodbURL ='mongodb://manpreet:Gnanakch2@@ds163918.mlab.com:63918/spartanconnection';

mongoose.connect(mongodbURL);

// for root, app should use below route********
app.use('/', router);

//This example shows a middleware function with no mount path.
// The function is executed every time the app receives a request.
app.use(function (req, res, next) {
    res.send('You entered Black Hole');
    next()
});

module.exports=app;