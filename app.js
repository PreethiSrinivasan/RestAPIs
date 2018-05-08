var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var userRoutes = require('./routes/user');
var serviceRoutes = require('./routes/service');
var disasterRoutes = require('./routes/disaster');
var app = express();
mongoose.connect(process.env.MONGO_URL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/v1/user', userRoutes);
app.use('/v1/disaster', disasterRoutes);
app.use('/v1/service', serviceRoutes);

module.exports = app;
