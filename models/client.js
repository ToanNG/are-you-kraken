'use strict';

var mongoose = require('mongoose');

var clientModel = function () {

    var clientSchema = mongoose.Schema({
        clientId: String,
        clientSecret: String
    });

    return mongoose.model('Client', clientSchema);
};

module.exports = new clientModel();
