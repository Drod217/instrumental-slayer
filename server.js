var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');

var app = express();

var PORT = process.env.PORT || 3000;

//Implements bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/controller.js");

app.use("/", routes);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});