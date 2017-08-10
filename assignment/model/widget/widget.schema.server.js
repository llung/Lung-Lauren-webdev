var mongoose = require("mongoose");
var widgetSchema = mongoose.Schema({
    name: String,
    widgetType: String,
    size: Number,
    text: String
}, {collection: "widget"});
module.exports = widgetSchema;