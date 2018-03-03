// Require Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up routes
//HTML routes
require("./routing/htmlRoutes.js")(app);
// API routes
require("./routing/apiRoutes.js")(app);

// Start the server
app.listen(PORT, function() {
	console.log("App listening on PORT ", PORT);
});