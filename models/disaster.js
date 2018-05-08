var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String},
    item: {type: String},
    year: {type: Number},
    state: {type: String}

});


module.exports = mongoose.model('Disaster', schema, 'disaster_recovery');
