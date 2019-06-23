module.exports = function(app) {

    var friendList = require("../data/friends");

    app.get("/api/friends", function(req, res) {
        res.json(friendList);
    });

    app.post("api/friends", function(req, res){
        friendList.push(req.body);
    });

};