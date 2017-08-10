var app = require("../../express");
var userModel = require("../model/user/user.model.server");

var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder", isAdmin: true  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
];

// http handlers
app.post("/api/user", createUser);
app.get("/api/user", findUserByCredentials);
//app.get("/api/user?username=username", findUserByCredentials);
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


/*
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

*/



//GET "/api/user?username=username&password=password"
function findUserByCredentials(req, res) {
    console.log("here");
    var _username = req.query.username;
    var _password = req.query.password;
    if (_username && _password) {
        for (var u in users) {
            if (users[u].username === _username && users[u].password === _password) {
                res.send(users[u]);
                console.log("found user");
                return;
            }
        }
    }
    if (_username) {
        for(var u in users) {
            if(users[u].username === _username) {
                res.send(users[u]);
                return;
            }
        }
    }
    console.log("not a user");
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
    var _user = req.body;
    for (var u in users) {
        if (users[u]._id ===_uid) {
            _user._id = users[u]._id;
            users[u] = _user;
            res.send(_user);
            return;
        }
    }
    res.sendStatus(404);
}

//DELETE "/api/user/:userId"
function deleteUser(req, res){
    var _uid = req.params.userId;
    res.send("0");

}



/*

var app = require("../../express");
 var userModel = require("../models/user.model.server");

 var users = [
 {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder", isAdmin: true  },
 {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
 {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
 {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
 ];

 // http handlers
 app.get("/api/users", getAllUsers);
 app.get("/api/user/:userId", getUserById);
 app.get("/api/user", findUser);
 app.post("/api/user", registerUser);
 app.put("/api/user/:userId", updateUser);

 function updateUser(req, res) {
 var userId = req.params.userId;
 var user = req.body;

 userModel
 .updateUser(userId, user)
 .then(function (status) {
 res.json(status);
 }, function (err) {
 res.sendStatus(404).send(err);
 });
 }

 function registerUser(req, res) {
 var user = req.body;
 userModel
 .createUser(user)
 .then(function (user) {
 res.json(user);
 })
 }

 function findUser(req, res) {
 var username = req.query.username;
 var password = req.query.password;


 if(username && password) {
 userModel
 .findUserByCredentials(username, password)
 .then(function (user) {
 res.json(user);
 return;
 }, function (err) {
 res.sendStatus(404).send(err);
 return;
 })
 return;
 } else if(username) {
 for(var u in users) {
 if(users[u].username === username) {
 res.send(users[u]);
 return;
 }
 }
 }
 res.send("0");
 }

 function getAllUsers(req, response) {
 response.send(users);
 }

 function getUserById(req, response) {
 userModel
 .findUserById(req.params.userId)
 .then(function (user) {
 response.json(user);
 });
 // for(var u in users) {
 //     if(users[u]._id === req.params.userId) {
 //         response.send(users[u]);
 //         return;
 //     }
 // }
 // response.sendStatus(404)
 }


 */