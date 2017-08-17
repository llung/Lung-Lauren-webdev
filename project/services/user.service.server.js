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