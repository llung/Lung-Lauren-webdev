var app = require("../../express");
//var userModel = require("../models/user.model.server");

var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder", isAdmin: true  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
];

// http handlers
app.post("/api/user", createUser);
app.get("/api/user?username=username", findUserByUserName);
app.get("/api/user?username=username&password=password", findUserByCredentials);
app.get("/api/user/:userId", findUserById);
app.put("/api/user/:userId", updateUser);
app.delete("/api/user/:userId", deleteUser);

//POST "/api/user"
function createUser(req, res){
    var _user = req.body;
    _user._id = (new Date()).getTime() + "";
    users.push(_user);
    res.send(_user);
}

//GET "/api/user?username=username"
function findUserByUserName(req, res){
    var _username = req.query.username;

    for(u in users) {
        if(users[u].username === _username) {
            res.send(users[u]);
            return;
        }
    }
    res.send("0");
}

//GET "/api/user?username=username&password=password"
function findUserByCredentials(req, res) {
    var _username = req.query.username;
    var _password = req.query.password;
    if (_username && _password) {
        for (var u in users) {
            if (users[u].username === _username && users[u].password === _password) {
                res.send(users[u]);
                return;
            }
        }
    }
    res.send("0");

}

//GET "/api/user/:userId"
function findUserById(req, res){
    for(var u in users) {
        if(users[u]._id === req.params.userId) {
            res.send(users[u]);
            return;
        }
    }
    res.send("0");
}

//PUT "/api/user/:userId"
function updateUser(req, res){
    var _uid = req.params.userId;
}

//DELETE "/api/user/:userId"
function deleteUser(req, res){
    var _uid = req.params.userId;
}