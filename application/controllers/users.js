'use strict';

var User = {

    /**
    * User Index
    **/
    index: function(req, res) {
        res.send(test);
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

module.exports = User;