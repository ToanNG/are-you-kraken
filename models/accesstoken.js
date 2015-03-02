'use strict';

var mongoose = require('mongoose');

var accessTokenModel = function () {

    var accessTokenSchema = mongoose.Schema({
        token: { type: String, required: true, unique: true },
        clientId: String,
        userId: { type: String, required: true },
        expirationDate: Date
    });

    return mongoose.model('AccessToken', accessTokenSchema);
};

module.exports = new accessTokenModel();