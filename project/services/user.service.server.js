var app = require("../../express");
var userModel = require("../models/user.model.server");
var courseModel = require("../models/course.model.server");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(localStrategy));
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

app.post("/api/login", passport.authenticate('local'), login);
app.post("/api/logout", logout);
app.post("/api/register", createUser);
app.post("/updateUser", updateUser);
app.post("/removecourse", removeCourse);

function removeCourse(req, res) {
    courseId = req.body.info.course;
    userId = req.body.info.user;
    userModel.removeCourse(userId, courseId)
    return res.json(userId);
}

function updateUser(req, res) {
    var user = req.body.user;
    userModel.updateUser(user._id, user);
    return res.json(user);
}
function createUser(req, res) {
    var user = req.body.user;
    userModel.createUser(user);
    return res.json(user);
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