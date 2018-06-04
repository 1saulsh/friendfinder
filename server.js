// setup server
//Dependencies to give server useful functionality
//express makes it easier for us to use node in our terminal
var express = require("express");
//allows us to receive our info back in Json form
var bodyParser = require("body-parser");

//Express Configuration
//This sets up the basic properties for our express server

//Tells node we are creating an "express" server
var app = express();

var path = require ("path");

//Sets an initial port. We'll use this later in our listener
var PORT= process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
//Body Parser makes it easy for our server to interpre data sent to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// parse an HTML body into a string
app.use(bodyParser.text());
  
// parse some custom thing into a Buffer
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
 


//Router
//The below belows routes give our server a "map" of how to respond when users visit or request data from various URLs.

//require in this file to tell program to pass the app or in this case "express" into the module exports function
require("./app/routing/api-routes.js")(app);
//require in this file to tell program to pass the app or in this case "express" into the module exports function
require("./app/routing/html-routes.js")(app);


//Listener

//Listener to start the server
app.listen(PORT, function() {
    console.log("App listening on PORT:" + PORT); 
 });