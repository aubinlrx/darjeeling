'use strict';

var express    = require('express');
var logger     = require('morgan');
var bodyParser = require('body-parser');

var app = module.exports = express();

//Set default view engine
app.use('view engine', 'jade');

//Set view directory
app.set('views', __dirname + '/views');

