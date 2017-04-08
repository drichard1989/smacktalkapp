'use strict';

var User = require('../models/User.js');
var Game = require('../models/Game.js');

/*
	name: {
		type: String,
		required: true
	},
	picture: {
		type: String,
		required: true
	},
	wins: {
		type: Integer,
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
	currentGames: [
		{
			type: Schema.Types.ObjectId,
			ref: "Game"
		}
	]
*/

module.exports = function (app) {
	app.post('/adduser', function (req, res) {
		// parameters will be name and picture
		console.log(req.body);

		var newUser = new User({
			_id: req.body.facebook_id,
			name: req.body.name,
			picture: req.body.picture
		});

		newUser.save(function (err, doc) {
			if (err) throw err;

		});

		res.json({});
	});

	app.put('/finishgame', function (req, res) {
		// parameters will be winner/loser id, game_id
		console.log(req.body);
		console.log();

		// updating winner
		User.find({ _id: req.body.winner_id }, function (err, doc) {
			if (err) throw err;

			// User.update()
			console.log(doc);
			var newWins = doc[0].wins + 1;
			var updatedStreak = doc[0].currentStreak + 1;
			var newLongestStreak = doc[0].longestStreak;
			if (updatedStreak > doc[0].longestStreak) {
				newLongestStreak = updatedStreak;
				console.log("\nLongest streak updated\n");
			}

			User.update({ _id: req.body.winner_id }, { $set: { wins: newWins, currentStreak: updatedStreak, longestStreak: newLongestStreak } }, function (err, doc) {
				console.log("user update");
				if (err) throw err;
				console.log(doc);
				// res.json({});
				// update loser
				User.find({ _id: req.body.loser_id }, function (err, doc) {
					if (err) throw err;

					var newLosses = doc[0].losses + 1;

					User.update({ _id: req.body.loser_id }, { $set: { losses: newLosses, currentStreak: 0 } }, function (err, doc) {
						if (err) throw err;

						console.log(doc);

						// res.json({});
						// update game
						Game.update({ _id: req.body.game_id }, { $set: { winner_id: req.body.winner_id, loser_id: req.body.loser_id, in_progress: false } }, function (err, doc) {
							if (err) throw err;

							res.json({});
						});
					});
				});
			});
		});


	});

	app.post("/creategame", function (req, res) {
		// params are player1_id, player2_id
		// player1_id is the person that created the game
		console.log(req.body);
		var newGame = new Game({
			player_ids: [{ player_id: req.body.player1_id }, { player_id: req.body.player2_id }],
			friends: [
				{
					friend_id: "1234asfd",
					friend_name: "Anthony",
					friend_picture: "anthonypicture",
					flipped_status: [
						{
							player_id: req.body.player1_id
						},
						{
							player_id: req.body.player2_id
						}
					]
				},
				{
					friend_id: "0987;lkjj",
					friend_name: "Dylan",
					friend_picture: "dylanpicture",
					flipped_status: [
						{
							player_id: req.body.player1_id
						},
						{
							player_id: req.body.player2_id
						}
					]
				},
				{
					friend_id: "5665fab",
					friend_name: "Ian",
					friend_picture: "ianpicture",
					flipped_status: [
						{
							player_id: req.body.player1_id
						},
						{
							player_id: req.body.player2_id
						}
					]
				}
			]
		});

		newGame.save(function (err, doc) {
			if (err) throw err;
			var idArray = [{ _id: req.body.player1_id }, { _id: req.body.player2_id }];
			User.update(idArray, { $push: { currentGames: newGame } }, { multi: true }, function (err, doc) {
				if (err) throw err;

				res.json({});
			});
		});

	});

	// app.put('/addwin', function (req, res) {
	// 	// console.log(req.body);
	// 	// User.update({_id: req.body.id}, {$set: {}})
	// 	User.find({ _id: req.body.id }, function (err, doc) {
	// 		if (err) throw err;

	// 		// User.update()
	// 		console.log(doc);
	// 		var newWins = doc[0].wins + 1;
	// 		var updatedStreak = doc[0].currentStreak + 1;
	// 		var newLongestStreak = doc[0].longestStreak;
	// 		if (updatedStreak > doc[0].longestStreak) {
	// 			newLongestStreak = updatedStreak;
	// 			console.log("\nLongest streak updated\n");
	// 		}

	// 		User.update({ _id: req.body.id }, { $set: { wins: newWins, currentStreak: updatedStreak, longestStreak: newLongestStreak } }, function (err, doc) {
	// 			console.log("user update");
	// 			if (err) throw err;
	// 			console.log(doc);
	// 			res.json({});
	// 		});
	// 	});

	// 	Game.update({_id: req.body.game_id}, function(err, doc) {

	// 	});
	// });

	// app.put('/addloss', function (req, res) {
	// 	console.log(req.body);

	// 	User.find({_id: req.body.id}, function(err, doc) {
	// 		if (err) throw err;

	// 		var newLosses = doc[0].losses + 1;

	// 		User.update({_id: req.body.id}, {$set: {losses: newLosses, currentStreak: 0}}, function(err, doc) {
	// 			if (err) throw err;

	// 			console.log(doc);

	// 			res.json({});
	// 		});
	// 	});
	// });
};