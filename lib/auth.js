'use strict';

var BasicStrategy = require('passport-http').BasicStrategy,
    ClientPasswordStrategy = require('passport-oauth2-client-password').Strategy,
    BearerStrategy = require('passport-http-bearer').Strategy,
    User = require('../models/user'),
    Client = require('../models/client'),
    AccessToken = require('../models/accesstoken'),
    crypto = require('crypto');

/**
 * BasicStrategy & ClientPasswordStrategy
 *
 * These strategies are used to authenticate registered OAuth clients.  They are
 * employed to protect the `token` endpoint, which consumers use to obtain
 * access tokens.  The OAuth 2.0 specification suggests that clients use the
 * HTTP Basic scheme to authenticate.  Use of the client password strategy
 * allows clients to send the same credentials in the request body (as opposed
 * to the `Authorization` header).  While this approach is not recommended by
 * the specification, in practice it is quite common.
 */
exports.basicStrategy = function () {
    return new BasicStrategy(function (clientId, clientSecret, done) {
        Client.findOne({clientId: clientId}, function (err, client) {
            if (err) return done(err)
            if (!client) return done(null, false)
            if (client.clientSecret == clientSecret) return done(null, client)
            else return done(null, false)
        });
    });
};

exports.clientPasswordStrategy = function () {
    return new ClientPasswordStrategy(function (clientId, clientSecret, done) {
        Client.findOne({clientId: clientId}, function (err, client) {
            if (err) return done(err)
            if (!client) return done(null, false)
            if (client.clientSecret == clientSecret) return done(null, client)
            else return done(null, false)
        });
    });
};

/**
 * BearerStrategy
 *
 * This strategy is used to authenticate users based on an access token (aka a
 * bearer token).  The user must have previously authorized a client
 * application, which is issued an access token to make requests on behalf of
 * the authorizing user.
 */
exports.bearerStrategy = function () {
    return new BearerStrategy(function (accessToken, done) {
        var accessTokenHash = crypto.createHash('sha1').update(accessToken).digest('hex')
        AccessToken.findOne({token: accessTokenHash}, function (err, token) {
            if (err) return done(err)
            if (!token) return done(null, false)
            if (new Date() > token.expirationDate) {
                AccessToken.remove({token: accessTokenHash}, function (err) { done(err) })
            } else {
                User.findOne({username: token.userId}, function (err, user) {
                    if (err) return done(err)
                    if (!user) return done(null, false)
                    // no use of scopes for no
                    var info = { scope: '*' }
                    done(null, user, info);
                })
            }
        });
    });
};