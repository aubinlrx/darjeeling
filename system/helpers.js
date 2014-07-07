'use strict';

//Configs
var config  = require('../application/configs/config');
var path    = require('path');

var Helpers = function( app ) {

    //Base url implementation
    app.use(function(req, res, next) {

        res.locals.base_url = function(url) {
            var base_url = req.baseUrl,
                port     = config.PORT,
                host     = req.host,
                protocol = req.protocol;

            var suffix = protocol + "://" + host + ":" + port;
            
            if( base_url.trim() !== '' )
            {
                suffix += '/' + base_url
            }

            return suffix + url;
        }

        next();

    });

};

module.exports = Helpers;