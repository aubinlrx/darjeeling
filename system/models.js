'use strict';

var fs      = require('fs'),
    path    = require('path');

module.exports = function( app ) {
    
    fs.readdirSync(app.settings.models).forEach(function(file) {

        if( file === 'readme.md' ) return;

        var filePath = path.join(app.settings.models, file);
        if( filePath !== __filename )
        {
            var baseFilename = path.basename(file, path.extname(file));
            var model = path.join(app.settings.models, baseFilename);
            return require(model);
        }
    });

};