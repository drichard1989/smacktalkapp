'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

mongoose.Promise = Promise;

var app = express();

mongoose.connect('mongodb://localhost/smacktalk');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var db = mongoose.connection;

db.on("error", function(error) {
	throw error;
});

db.on("open", function() {
	console.log("Mongoose connection successful");
});

require('./controllers/app_controller.js')(app);

app.listen(PORT, function() {
	console.log("App is listening on port", PORT);
});