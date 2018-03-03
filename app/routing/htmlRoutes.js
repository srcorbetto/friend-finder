// Requirement for node to push files to client
var path = require("path");

// Export function for the server to use for routing
module.exports = function (app) {

	// Homepage
	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	// Survey
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

}