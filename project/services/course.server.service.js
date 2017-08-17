var app = require("../../express");
var userModel = require("../models/user.model.server");
var courseModel = require("../models/course.model.server");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(localStrategy));
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

app.post("/api/removestudent", removeStudent);

function removeStudent (req, res) {
    courseId = req.body.info.course;
    userId = req.body.info.user;
    courseModel.removeStudent(courseId, userId);
    return res.json(userId);
}