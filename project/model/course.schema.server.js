var mongoose = require("mongoose");
var courseSchema = mongoose.Schema({
    name: String,
    description: String,
    teacher : {type: mongoose.Schema.Types.ObjectId, ref:"UserModel"},
    students : [{type: mongoose.Schema.Types.ObjectId, ref:"UserModel"}]
}, {collection: "courses"});
module.exports = courseSchema;