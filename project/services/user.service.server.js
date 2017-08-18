var app = require("../../express");
var userModel = require("../model/user.model.server");
var courseModel = require("../model/course.model.server");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(localStrategy));
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

app.post("/api/login", passport.authenticate('local'), login);
app.get('/api/checkLogin',checkLogin);
app.post("/api/logout", logout);
app.post("/api/register", createUser);
app.post("/api/updateUser", updateUser);
app.delete("/api/removecourse", removeCourse);
app.post("/api/addfriend", addFriend);
app.post("/api/removefriend", unfriend);


function checkLogin(req, res) {
    console.log("in checkLogin in user.service.server");
    res.send(req.isAuthenticated() ? req.user : '0');
}

function addFriend(req, res) {
    var n = req.body.username;
    userModel.addFriendByUsername(username);
    return res.json(n); //check to see if the friend is already there?
}

function unfriend(req, res) {
    var n = req.body.username;
    userModel.removeFriendByUsername(username);
    return res.json(n); //check to see if we are even friends?
}

function removeCourse(req, res) {
    courseId = req.body.info.course;
    userId = req.body.info.user;
    userModel.removeCourse(userId, courseId);
    return res.json(userId);
}

function updateUser(req, res) {
    var user = req.body.user;
    userModel.updateUser(user._id, user);
    return res.json(user);
}
function createUser(req, res) {
    var user = req.body;
    userModel
        .createUser(user)
        .then(function (response) {
            return res.json(response);
        });
}

function localStrategy(username, password, done) {
    userModel
        .findUserByCredentials(username, password)
        .then(function (user) {
            if (!user) {
                return done(null, false, {message: "User Not Found"});
            }
            return done(null, user);
        }, function (err) {
            if (err) {
                return done(err);
            }
        });
}

function login(req, res) {
    var user = req.user;
    res.json(user);
}

function logout(req, res) {
    req.logOut();
    res.send(200);
}


//to help define what we want in the cookie
//user the user object to encode in cookie
function serializeUser(user, done) {
    done(null, user);
}

function deserializeUser(user, done) {
    userModel
        .findUserById(user._id)
        .then(
            function(user){
                done(null, user);
            },
            function(err){
                done(err, null);
            }
        );
}