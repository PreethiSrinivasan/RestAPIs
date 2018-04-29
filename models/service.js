var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    drone_name: {type: String, required: true},
    drone_latitude: {type: Number, required: true},
    drone_longitude: {type: Number, required: true},
    user_id: {type: Schema.Types.ObjectId, ref: 'User_id'}
    
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Service', schema, 'services');