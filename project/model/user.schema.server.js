var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    teacher : {type :Boolean, default: false},
    firstName: String,
    email : String,
    lastName: String,
    courses: [{type: mongoose.Schema.Types.ObjectId, ref:"CourseModel"}],
    friends: [{type: mongoose.Schema.Types.ObjectId, ref:"UserModel"}],
    isAdmin: Boolean
}, {collection: "users"});
module.exports = userSchema;