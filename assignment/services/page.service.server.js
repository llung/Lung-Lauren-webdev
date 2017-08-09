var app = require("../../express");

var pages = [
    { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
    { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
    { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
];

app.post("/api/website/:websiteId/page", createPage);
app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
app.get("/api/page/:pageId", findPagesById);
app.put("/api/page/:pageId", updatePage);
app.delete("/api/page/:pageId", deletePage);

//POST "/api/website/:websiteId/page"
function createPage(req, res){
    var _wid = req.params.websiteId;
    var _page = req.body;
    _page._id = (new Date()).getTime() + "";
    _page.websiteId = _wid;
    pages.push(_page);
    res.send(_page);
}

//GET "/api/website/:websiteId/page"
function findAllPagesForWebsite(req, res){
    var _wid = req.params.websiteId;
    var _pages = [];
    for (var p in pages) {
        if (pages[p].websiteId ===_wid) {
            _pages.push(pages[p]);
        }
    }
    res.send(_pages);
}

//GET "/api/page/:pageId"
function findPagesById(req, res){
    var _pid = req.params.pageId;
    var _pages = [];
    for (var p in pages) {
        if (pages[p]._Id ===_pid) {
            _pages.push(pages[p]);
        }
    }
    res.send(_pages);
}

//PUT "/api/page/:pageId
function updatePage(req, res){
    var _pid = req.params.pageId;
    var _page = req.body;
    for (var p in pages) {
        if (pages[p]._id ===_pid) {
            pages[p] = _page;
            res.send(_page);
            return;
        }
    }
    res.sendStatus(404);
}

//DELETE "/api/page/:pageId"
function deletePage(req, res){
    var _pid = req.params.pageId;
    res.send("0");
}