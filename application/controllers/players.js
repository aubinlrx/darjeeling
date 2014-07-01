'use strict';

var logger = require('morgan');

module.exports = {

    /**
    * Player Index
    **/
    index: function(req, res) {
        res.send('Player Index');
    }

}