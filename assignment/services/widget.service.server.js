var app = require("../../express");

var widgets = [
    {"_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    {"_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    {
        "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
        "url": "http://lorempixel.com/400/200/"
    },
    {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    {"_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    {
        "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
        "url": "https://youtu.be/AM2Ivdi9c4E"
    },
    {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
];


app.post("/api/page/:pageId/widget", createWidget);
app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
app.get("/api/widget/:widgetId", findWidgetById);
app.put("/api/widget/:widgetId", updateWidget);
app.delete("/api/widget/:widgetId", deleteWidget);

//POST "/api/page/:pageId/widget"
function createWidget(req, res){
    var _pid = req.params.pageId;
    var _widget = req.body;
    _widget._id = (new Date()).getTime() + "";
    _widget.pageId = _pid;
    widgets.push(_widget);
    res.send(_widget);
}

//GET "/api/page/:pageId/widget"
function findAllWidgetsForPage(req, res){
    var _widgets = [];
    var _pid = req.params.pageId;
    for (var w in widgets) {
        if (widgets[w].pageId === _pid) {
            _widgets.push(widgets[w]);
        }
    }
    res.send(_widgets);
}

//GET "/api/widget/:widgetId"
function findWidgetById(req, res){
    var _wid = req.params.widgetId;
    for (var w in widgets) {
        if (widgets[w]._id === _wid) {
            res.send(widgets[w]);
            return;
        }
    }
    res.send("0");
}

//PUT "/api/widget/:widgetId"
function updateWidget(req, res){
    var _wid = req.params.userId;
    var _widget = req.body;
    for (var w in websites) {
        if (widgets[w]._id === _wid) {
            widgets[w] = _widget;
            res.send(_widget);
            return;
        }
    }
    res.sendStatus(404);
}

//DELETE "/api/widget/:widgetId"
function deleteWidget(req, res){
    var _wid = req.params.userId;
}