'use strict';

var UserModel = require('../models/user_model');

var User = {

    /**
    * User Index
    **/
    index: function(req, res) {
        UserModel.findAll(function(err, users) {
            if( err ) return res.send(err);
            res.render('../views/users/index', {users: users});
        });   
    },

    /**
    * User Show
    */
    show: function(req, res) {
        var id = req.param('id');
        UserModel.findById(id, function(err, user) {
            if( err ) return res.send(err);
            console.log(user);
            res.render('../views/users/show', {user: user});
        });
    },

    /**
    * New
    */
    new: function(req, res) {
        res.render('../views/users/new');
    },

    /**
    * Create
    */
    create: function(req, res) {
        UserModel.create({
            name: req.body.name,
            surname: req.body.surname,
            points: req.body.points,
            email: req.body.email,
            birthdate: req.body.birthdate
        }, function(err, user) {
            if( err ) return res.send(err);
            console.log(user);
            res.redirect('/users/' + user._id);
        });
    },

    /**
    * Edit
    */
    edit: function(req, res) {
        var id = req.param('id');
        UserModel.findById(id, function(err, user) {
            if( err ) return res.send(err);
            res.render('../views/users/edit', {user: user});
        });
    },

    /**
    * Update
    */
    update: function(req, res) {
        
        //Get ID
        var id = req.body._id;
        delete req.body._id;

        //Update record
        UserModel.update(id, {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            birthdate: req.body.birthdate,
            points: req.body.points
        }, function(err, user) {
            if( err ) return res.send(err);
            res.redirect('/users/' + id);
        });
    },

    /**
    * Delete
    */
    delete: function(req, res) {
        var id = req.param('id');
        UserModel.delete(id, function(err, id) {
            if( err ) return res.send(err);
            res.redirect('/users');
        });
    }

}

module.exports = User;