var path = require("path");

// Import friends db
var friends = require("../data/friends");

// API route export for the server
module.exports = function (app) {

	// Access to the API
	app.get("/api/:input?", function(req, res){

		var chosen = req.params.input;

		if (chosen) {
			// Loop through db looking for a match
			for (i=0; i < friends.length; i++) {
				if (chosen === friends[i].routeName) {
					return res.json(friends[i])
				} 
			}
		} else {
			// If no match in optional param, show all
			return res.json(friends);
		}
		return res.json(friends);

	});

	// Post to the API
	app.post("/api/friends", function(req, res){

		// Incoming data from form submit
		var userData = req.body;
		// console.log(newFriend);

		// Convert incoming scores into numbers
		userData.scores = parseInt(userData.scores);

		var lowestDifference = 1000;
		var userNewFriend = {
			name: "",
			photo: ""
		};

		// friends.push(userData);
		for(i=0; i<friends.length; i++) {
			var difference = Math.abs(userData.scores - friends[i].scores);
			console.log(difference);

			if (difference < lowestDifference) {
				lowestDifference = difference;
				userNewFriend.name = friends[i].name;
				userNewFriend.photo = friends[i].photo;
			}
		}

		// console.log(friends);



		// Sends back to the client
		return res.json(userNewFriend);

		// Decide which friend is most compatable

	});



}
