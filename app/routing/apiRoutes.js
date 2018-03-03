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

		var newFriend = req.body;
		console.log(newFriend);

		friends.push(newFriend);

		return res.json(friends);

		// Decide which friend is most compatable

	});

}
