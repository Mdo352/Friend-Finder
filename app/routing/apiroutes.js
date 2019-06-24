module.exports = function(app) {

    var friendList = require("../data/friends");

    app.get("/api/friends", function(req, res) {
        res.json(friendList);
    });

    app.post("/api/friends", function(req, res){
        var newFreind = req.body;
        newFreind.routeName = newFreind.name.replace(/\s+/g, "").toLowerCase();

        console.log(newFreind);
        res.json(newFreind);
        friendList.push(newFreind);

    });

};