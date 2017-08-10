var mongoose = require("mongoose");
var pageSchema = mongoose.Schema({
    name: String,
    title: String,
    developer: {type: mongoose.Schema.Types.ObjectId, ref:"UserModel"}
}, {collection: "page"});
module.exports = pageSchema;