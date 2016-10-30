"use strict"

var express = require('express'),
    app = express(),
    nodemon = require('nodemon'),
    winston = require('winston'),
    websocket = require('socket.io');

app.use(express.static('src/www'));
app.listen(process.env.port || 8080, function(){
    winston.info('Application server running!');
});
