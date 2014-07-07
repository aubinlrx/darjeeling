'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({

    label: String,
    number: {type: Number, unique: true},
    level: String,
    players: Array,
    gender: String,
    createdOn: { type: Date, default: Date.now },
    updatedOn: Date

});

var Team = mongoose.model('Team', teamSchema);

var TeamModel = {

    /**
    * FindAll method
    */
    findAll: function( cb ) {
        Team.find({}, function(err, users) {
            cb(err, users);
        });
    },

    /**
    * Create
    */
    create: function( obj, cb ) {
        var team = new Team(obj);
        team.save(function(err){
            if(err) cb(err, team);
            cb(null, team);
        });
    },

}

module.exports = TeamModel;