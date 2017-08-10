var mongoose = require("mongoose");
var pageSchema = mongoose.Schema({
    name: String,
    title: String,
    dateCreated: {type: Date, default: Date.now},
    developer: {type: mongoose.Schema.Types.ObjectId, ref:"UserModel"}
}, {collection: "page"});
module.exports = pageSchema;