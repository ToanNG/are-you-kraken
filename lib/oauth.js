'use strict';

var oauth2orize = require('oauth2orize'),
    passport = require('passport'),
    crypto = require('crypto'),
    utils = require('./utils'),
    User = require('../models/user'),
    Client = require('../models/client'),
    AccessToken = require('../models/accesstoken'),
    RefreshToken = require('../models/refreshtoken');

// create OAuth 2.0 server
var server = oauth2orize.createServer();

server.serializeClient(function (client, done) {
    return done(null, client.id);
});

server.deserializeClient(function (id, done) {
    Client.find(id, function (err, client) {
        if (err) { return done(err); }
        return done(null, client);
    });
});

// resource owner password
server.exchange(oauth2orize.exchange.password(function (client, username, password, scope, done) {
    User.findOne({username: username}, function (err, user) {
        if (err) return done(err)
        if (!user) return done(null, false)

        if (user.validPassword(password)) {
            var token = utils.uid(256)
            var refreshToken = utils.uid(256)
            var tokenHash = crypto.createHash('sha1').update(token).digest('hex')
            var refreshTokenHash = crypto.createHash('sha1').update(refreshToken).digest('hex')
            
            var expirationDate = new Date(new Date().getTime() + (3600 * 1000))
        
            AccessToken.create({token: tokenHash, expirationDate: expirationDate, clientId: client.clientId, userId: username, scope: scope}, function (err) {
                if (err) return done(err)
                RefreshToken.create({refreshToken: refreshTokenHash, clientId: client.clientId, userId: username}, function (err) {
                    if (err) return done(err)
                    done(null, token, refreshToken, {expires_in: expirationDate})
                })
            })
        } else {
            return done(null, false)
        }
    })
}))

// refresh Token
server.exchange(oauth2orize.exchange.refreshToken(function (client, refreshToken, scope, done) {
    var refreshTokenHash = crypto.createHash('sha1').update(refreshToken).digest('hex')

    RefreshToken.findOne({refreshToken: refreshTokenHash}, function (err, token) {
        if (err) return done(err)
        if (!token) return done(null, false)
        if (client.clientId !== token.clientId) return done(null, false)
        
        var newAccessToken = utils.uid(256)
        var accessTokenHash = crypto.createHash('sha1').update(newAccessToken).digest('hex')
        
        var expirationDate = new Date(new Date().getTime() + (3600 * 1000))
    
        AccessToken.update({userId: token.userId}, {$set: {token: accessTokenHash, scope: scope, expirationDate: expirationDate}}, function (err) {
            if (err) return done(err)
            done(null, newAccessToken, refreshToken, {expires_in: expirationDate});
        })
    })
}))

// token endpoint
exports.token = [
    passport.authenticate(['clientBasic', 'clientPassword'], { session: false }),
    server.token(),
    server.errorHandler()
]