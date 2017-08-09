var app = require("../../express");

var pages = [
    { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
    { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
    { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
];

app.post("/api/page/:pageId/widget", createWidget);
app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
app.get("/api/widget/:widgetId", findWidgetById);
app.put("/api/widget/:widgetId", updateWidget);
app.delete("/api/widget/:widgetId", deleteWidget);

//POST "/api/page/:pageId/widget"
function createWidget(req, res){
    var _pid = req.params.pageId;
    var _page = req.body;
    _page._id = (new Date()).getTime() + "";
    _page.websiteId = _pid;
    pages.push(_page);
    res.send(_page);
}

//GET "/api/page/:pageId/widget"
function findAllWidgetsForPage(req, res){
    var _pages = [];
    var _pid = req.params.pageId;
    for (var p in pages) {
        if (pages[p]._id === _pid) {
            _pages.push(pages[p]);
        }
    }
    res.send(_pages);
}

//GET "/api/widget/:widgetId"
function findWidgetById(req, res){
    var _widgetId = req.params.widgetId;
    for (var p in pages) {
        if (pages[p]._id === _pid) {
            _pages.push(pages[p]);
        }
    }
    res.send(_pages);
}

//PUT "/api/widget/:widgetId"
function updateWidget(req, res){
    var _wid = req.params.userId;
}

//DELETE "/api/widget/:widgetId"
function deleteWidget(req, res){
    var _wid = req.params.userId;
}