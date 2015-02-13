'use strict';

var User = require('../../models/user');

module.exports = function (router) {

  router.get('/', function (req, res) {

    User.find(function (err, users) {
      if (err) {
        console.log(err);
      }
      var model = {
        users: users
      };
      res.status(200).json(model);
    });

  });


  router.post('/', function (req, res) {
    var b = req.body;

    var newUser = new User({
      username: b.username,
      password: b.password,
      firstname: b.firstname,
      lastname: b.lastname,
      email: b.email
    });

    newUser.save(function(err) {
      if (err) {
        console.log('save error', err);
      }

      res.res.sendStatus(200);
    });
  });

};
