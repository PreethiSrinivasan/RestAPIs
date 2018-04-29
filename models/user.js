var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    user_name: {type: String, required: true},
    user_email: {type: String, required: true,unique: true},
    user_password: {type: String, required: true},
    user_type: {type: String, required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema, 'users');