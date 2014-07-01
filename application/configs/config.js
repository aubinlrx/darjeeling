'use strict';

var base = {
    ENV: process.env.NODE_ENV || 'developpment',
    PORT: process.env.PORT || 3000,
    VIEW_ENGINE: 'jade',
    DB_URL: "mongodb://localhost/dev"
};

var dev = {
    DB_URL: "mongodb://localhost/dev"
};

var prod = {
    DB_URL: "mongodb://localhost/prod"
};

var mergeConfig = function( config ) {
  var key, val;
  for (key in config) {
    val = config[key];
    base[key] = val;
  }
  return base;
};

module.exports = (function() {
  switch (base.ENV) {
    case 'development':
      return mergeConfig(dev);
    case 'production':
      return mergeConfig(prod);
    default:
      return mergeConfig(dev);
  }
})();