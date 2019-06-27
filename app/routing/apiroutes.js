module.exports = function(app) {

    var friendList = require("../data/friends");

    app.get("/api/friends", function(req, res) {
        res.json(friendList);
    });

    app.post("/api/friends", function(req, res){

        var bestMatch = {
            name: "",
            photo: "",
            difference: 1000
        };

        var newFreind = req.body;
        var newScores = newFreind.scores;

        var totalDiff = 0;

        for (i = 0; i < friendList.length; i++){
            // console.log(friendList[i]);
            totalDiff = 0;
            for(j = 0; j < friendList[i].scores[j]; j++){
                totalDiff += Math.abs(parseInt(newScores[j]) - parseInt(friendList[i].scores[j]) );

                if (totalDiff <= bestMatch.difference){
                    bestMatch.name = friendList[i].name;
                    bestMatch.photo = friendList[i].photo;
                    bestMatch.difference = totalDiff;
                };
            };
        };
        // newFreind.routeName = newFreind.name.replace(/\s+/g, "").toLowerCase();

        console.log(newFreind);
        console.log(bestMatch);
        // console.log(newScores);
        // res.json(newFreind);
        friendList.push(newFreind);
        res.json(bestMatch);

    });

};