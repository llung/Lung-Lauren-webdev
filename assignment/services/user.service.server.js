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


function createUser(req, res){}

function findUserByUserName(req, res){}

function findUserByCredentials(req, res){}

function findUserById(req, res){}

function updateUser(req, res){}

function deleteUser(req, res){}