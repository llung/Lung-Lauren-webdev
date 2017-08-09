var app = require("../../express");

var websites = [
    { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
    { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
    { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
];

app.post("/api/user/:userId/website", createWebsite);
app.get("/api/user/:userId/website", findAllWebsitesForUser);
app.get("/api/website/:websiteId", findWebsiteById);
app.put("/api/user/:userId/website", updateWebsite);
app.delete("/api/user/:userId/website", deleteWebsite);

//POST "/api/user/:userId/website"
function createWebsite(req, res){
    var _uid = req.params.userId;
    var _website = req.body;
    _website._id = (new Date()).getTime() + "";
    _website.developerId = _uid;
    websites.push(_website);
    res.send(_website);
}

//GET "/api/user/:userId/website"
function findAllWebsitesForUser(req, res){
    var _uid = req.params.userId;
    var _websites = [];
    for (var w in websites) {
        if (websites[w].developerId === _uid) {
            _websites.push(websites[w]);
        }
    }
    res.send(_websites);
}

//GET "/api/website/:websiteId"
function findWebsiteById(req, res){
    var _wid = req.params.websiteId;
    for (var w in websites) {
        if (websites[w]._id === _wid) {
            res.send(websites[w])
            return;
        }
    }
    res.send("0");
}

//PUT "/api/user/:userId/website"
function updateWebsite(req, res){
    var _uid = req.params.userId;
    var _website = req.body;
    for (var w in websites) {
        if (websites[w]._id === _website._id && websites[w].developerId === _uid) {
            websites[w] = _website;
            res.send(_website);
            return;
        }
    }
    res.sendStatus(404);
}

//DELETE "/api/user/:userId/website"
function deleteWebsite(req, res){
    var _uid = req.params.userId;
    var _website = req.body;
    res.send("0");
}