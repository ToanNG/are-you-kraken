'use strict';


var IndexModel = require('../models/index'),
    oauth = require('../lib/oauth');


module.exports = function (router) {

    var model = new IndexModel();


    router.get('/', function (req, res) {
        res.render('index', model);
    });

    router.post('/oauth/token', oauth.token);

};
