'use strict';

/**
* Load Models
*/
var User   = require('../models/user_model');

module.exports = {

    /**
    * User Index
    **/
    index: function(req, res) {
        res.send('Index user');    
    },

    /**
    * User Show
    */
    show: function(req, res) {
        res.send('Show user');
    },

    /**
    * New
    */
    new: function(req, res) {
        res.send('Create new user');
    },

    /**
    * Create
    */
    create: function(req, res) {
        res.send('User created !');
    },

    /**
    * Edit
    */
    edit: function(req, res) {
        res.send('Edit user: ' + req.param('id'));
    },

    /**
    * Update
    */
    update: function(req, res) {
        res.send('User: ' + req.param('id') + ' updated !');
    },

    /**
    * Delete
    */
    delete: function(req, res) {
        res.send('User: ' + req.param('id') + ' deleted !');
    }

}