'use strict';

//Node modules
var path    = require('path');

//Express Midlewares
var express     = require('express'),
    bodyParser  = require('body-parser'),
    favicon     = require('serve-favicon'),
    serveStatic = require('serve-static');

//Configs
var config  = require('../application/configs/config');

module.exports = function( db, logger, root_path ) {

    var app = express();

    //Set view directory
    app.set('port', config.PORT);
    app.set('view engine', config.VIEW_ENGINE);
    app.set('views', root_path + '/application/views');
    app.set('models', root_path + '/application/models');
    app.set('routes', root_path + '/application/routes');
    app.set('controllers', root_path + '/application/controllers');
    app.set('config', config);

    //Set assets
    app.use( favicon( path.join(root_path, 'assets/img/favicon.ico') ) );
    app.use( serveStatic( path.join(root_path, 'assets') ) );

    //Bootstrap routes
    require('./routes')(app);

    //Bootstrap models
    require('./models')(app);

    return app;
};