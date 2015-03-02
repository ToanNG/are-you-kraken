'use strict';

var mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 5;

var userModel = function () {

    var userSchema = mongoose.Schema({
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        email: { type: String, required: true },
        created_at: { type: Date, default: Date.now },
        role: String
    });

    userSchema.methods.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };

    userSchema.pre('save', function (callback) {
        var user = this;

        // Break out if the password hasn't changed
        if (!user.isModified('password')) {
            return callback();
        }

        // Password changed so we need to hash it
        bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
            if (err) {
                return callback(err); 
            }

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return callback(err);
                }
                user.password = hash;
                callback();
            });
        });
    });

    return mongoose.model('User', userSchema);
};

module.exports = new userModel();
