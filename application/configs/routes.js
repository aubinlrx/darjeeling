'use strict';

module.exports = function(app) {

    var app = app || {};

    app.get('/', function(req, res) {
        res.send('Index Page');
    });

    //User routes
    var User = require('../controllers/users');
    app.get('/user', User.index);

    //Team routes
    var Player = require('../controllers/players');
    app.get('/player', Player.index);

}