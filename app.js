var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.send("Hi There!");
});
app.get("/bye", function(req, res) {
	res.send("Good Bye");
});
app.get("/dog", function(req, res) {
	res.send("rooo roo rooo");
	console.log("Someone made a request to /dog");
});
app.get("*", function(req, res) {
	res.send("This page does not exist!");
	console.log("Someone made a request a page that doesn't exist!");
});
	app.listen(3000);