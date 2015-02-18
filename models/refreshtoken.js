'use strict';

var mongoose = require('mongoose');

var refreshTokenModel = function () {

    var refreshTokenSchema = mongoose.Schema({
        refreshToken: { type: String, required: true, unique: true },
        clientId: String,
        userId: { type: String, required: true }
    });

    return mongoose.model('RefreshToken', refreshTokenSchema);
};

module.exports = new refreshTokenModel();