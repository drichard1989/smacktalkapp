'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// id, picture, name, wins, losses, number of games played, current streak, longest streak, current games (game id)
var UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	picture: {
		type: String,
		required: true
	},
	wins: {
		type: Number,
		default: 0
	},
	losses: {
		type: Number,
		default: 0
	},
	currentStreak: {
		type: Number,
		default: 0
	},
	longestStreak: {
		type: Number,
		default: 0
	},
	games: [
		{
			type: Schema.Types.ObjectId,
			ref: "Game"
		}
	],
	friendsList: [
		{
			type: Schema.Types.ObjectId,
			ref: "User"
		}
	]
});

var User = mongoose.model("User", UserSchema);

module.exports = User;