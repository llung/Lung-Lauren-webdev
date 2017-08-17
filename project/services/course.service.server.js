var app = require("../../express");
var userModel = require("../model/user.model.server");
var courseModel = require("../model/course.model.server");
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// passport.use(new LocalStrategy(localStrategy));
// passport.serializeUser(serializeUser);
// passport.deserializeUser(deserializeUser);

app.post("/api/removestudent", removeStudent);
app.post("api/newcourse", createCourse);

function createCourse(req, res) {
    var course = req.body.data;
    courseModel.createCourse(course);
    return res.json(course);
}

function removeStudent (req, res) {
    courseId = req.body.info.course;
    userId = req.body.info.user;
    courseModel.removeStudent(courseId, userId);
    return res.json(userId);
}