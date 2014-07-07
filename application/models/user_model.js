'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    name: String,
    surname: String,
    email: { type: String, unique: true },
    points: Number,
    birthdate: Date,
    createdOn: { type: Date, default: Date.now },
    updatedOn: Date

});

var User = mongoose.model('User', userSchema);

var UserModel = {

    /**
    * Create
    */
    create: function( obj, cb ) {
        var user = new User(obj);
        user.save(function(err){
            if(err) cb(err, user);
            cb(null, user);
        });
    },

    /**
    * Update method
    */
    update: function( id, obj, cb ) {
        User.findOne({'_id': id}, function(err, user) {
            if( err ) return cb(err, user);

            //Updated record
            user.name = obj.name;
            user.surname = obj.surname;
            user.email = obj.email;
            user.points = obj.points;
            user.birthdate = obj.birthdate;
            user.updatedOn = Date.now();

            //Persist change
            user.save(function(err, user) {
                if( err ) return cb(err, user);
                cb(null, user);
            });
        });
    },

    /**
    * Delete method
    */
    delete: function(id, cb ) {
        User.findOne({'_id': id}, function(err, user) {
            if( err ) return cb(err, id);
            User.remove(user, function(err, user) {
                cb(err, user);
            });
        });

    },

    /**
    * FindAll method
    */
    findAll: function( cb ) {
        User.find({}, function(err, users) {
            cb(err, users);
        });
    },

    /**
    * FindById method
    */
    findById: function( id, cb ) {
        User.findOne({'_id': id}, function(err, user) {
            cb(err, user);
        });
    }

}

module.exports = UserModel;