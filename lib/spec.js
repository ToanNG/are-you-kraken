'use strict';

var express = require('express'),
    passport = require('passport'),
    auth = require('./auth'),
    db = require('./database');

module.exports = function spec (app) {
    /*
     * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
     */
    app.on('middleware:after:session', function configPassport(eventargs) {
        passport.use('clientBasic', auth.basicStrategy());
        passport.use('clientPassword', auth.clientPasswordStrategy());
        passport.use('accessToken', auth.bearerStrategy());
        app.use(passport.initialize());
        app.use(passport.session());
    });
    return {
        onconfig: function (config, next) {
            /*
             * Add any additional config setup or overrides here. `config` is an initialized
             * `confit` (https://github.com/krakenjs/confit/) configuration object.
             */
            var dbConfig = config.get('databaseConfig');
            
            db.config(dbConfig);
            next(null, config);
        }
    };

};