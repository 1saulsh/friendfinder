//require survey data from friends.js file
//Data sourc holds arrays of info on all possible friends
var friends = require("../data/friends.js");


//Routing
module.exports = function(app) {

    //build an API GET route with the url /api/friends to view friends in JSON format
    //below code handles when users "visit" a page
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    
    //build an API POST route with /api/friends will be used to handle incoming survey results
    //Below code handles when a user submits a form and thus submits data to the server
    //In each case below, when a user submits form data (a JSON object)
    //... the JSON is pushed to the approriate Javascript array
    app.post("/api/friends", function(req,res) {
      
        
        // Note the code here. Our "server" will respond to a user's survey result
		// Then compare those results against every user in the database.
		// It will then calculate the difference between each of the numbers and the user's numbers.
		// It will then choose the user with the least differences as the "best friend match."
		// In the case of multiple users with the same result it will choose the first match.
		// After the test, it will push the user to the database.

        //We will use this object to hold the "best match".
        //We will constantly update it as we loop through all option
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000  
        };
        console.log(req.body);
        
        // //Here we take the result of the user's survey POST and parse it.
        var userData = req.body;
        //var userName = userData.name;
        //var userImage = userData.image;
        var userScores = userData.scores;

        console.log(userScores);

        //This variable will calculate the difference between the user's scores 
        //and the scores of each user in the database
        var totalDifference = 0;
        
        //Here we loop through all the friend possibilities in the database
        for (var i = 0; i < friends.length; i++) {

            console.log(friends[i]);
            totalDifference = 0;

            //we then loop through all the scores of each friend
            for (var j = 0; j < friends[i].scores[j]; j++) {

              //We calculate the difference between the scores and sum them into the totalDifference. Math absolute returns a postive number even if answer is negative
              totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

              //If the sum of differences is less then the differences of the current "best match"
              if (totalDifference <= bestMatch.friendDifference) {

                //Reset the bestMatch to be the new friend
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
                }
            }
        }
    

        //finally save the user's data to the database 
        //this has to happen after the check to prevent the database
        //.. from always returning the user as the user's best friend
        friends.push(userData);

        // //return a JSON with the user's bestMatch, This will be used by the HTML in the next page
         res.json(bestMatch);
    });
}
    
