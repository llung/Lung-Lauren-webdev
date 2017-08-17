var app = require('./express');
var express = app.express;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var passport      = require('passport');

var cookieParser  = require('cookie-parser');
var session       = require('express-session');

app.use(cookieParser());
app.use(session({
    secret: "eqweqwe",//process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


app.set('view engine', 'ejs');
// require("./utilities/filelist");

app.use(express.static(__dirname + '/public'));

//require("./test/app");
// require("./assignment/app.js");
require("./project/app.js");

var port = process.env.PORT || 3000;

app.listen(port);