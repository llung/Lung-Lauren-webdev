var mongoose = require("mongoose");
var widgetSchema = mongoose.Schema({
    name: String,
    type: String,
    url: String,
    width: String,
    description: String,
    height: String,
    rows: Number,
    class: String,
    icon: String,
    deletable: Boolean,
    formatted: Boolean,
    size: Number,
    dateCreated: {type: Date, default: Date.now},
    text: String
}, {collection: "widget"});
module.exports = widgetSchema;