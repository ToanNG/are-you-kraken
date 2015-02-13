'use strict';

var express = require('express'),
    db = require('./database');

module.exports = function spec (app) {
    /*
     * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
     */
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