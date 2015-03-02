'use strict';

var User = rootRequire('models/user'),
    passport = require('passport');

module.exports = function (router) {

  router.get('/', passport.authenticate('accessToken', { session: false }), function (req, res) {
    User.find(function (err, users) {
      if (err) {
        res.send(err);
      } else {
        res.status(200).json({
          users: users
        });
      }
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

    newUser.save(function (err) {
      if (err) {
        res.send(err);
      } else {
        res.sendStatus(200);
      }
    });
  });

};
