//require data from other files
var friends = require("../data/friends.js");

module.exports = function (app) {

    //build a route to view friends
    app.get("/api/friends", function(req,res) {
        res.json(friends);
    });
}