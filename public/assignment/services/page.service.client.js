(function () {
    angular
        .module("WebAppMaker")
        .factory("pageService", pageService);

    function pageService($http) {

        var pages = [
                { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
                { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
                { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
            ];

        var api = {
            "createPage" : createPage,
            "findPageByWebsiteId": findPageByWebsiteId,
            "findPageById": findPageById,
            "updatePage": updatePage,
            "deletePage": deletePage
        };
        return api;

        //adds the 'page' parameter instance to the local 'pages' array. the new page's websiteId is set to the
        //websiteId parameter
        function createPage(websiteId, page) {

        }

        //updates the page in local pages array whose _id matches the pageId parameter
        function updatePage(pageId, page) {

        }

        //retrieves the page in local pages array whose _id matches the pageId parameter
        function findPageById(pageId) {

        }

        //retrieves the pages in local 'pages' array whose websiteId matches the websiteId parameter
        function findPageByWebsiteId(websiteId) {
            var _pages = [];

            for(var p in pages) {
                if(pages[p].websiteId === websiteId) {
                    _pages.push(pages[p]);
                }
            }
            return _pages;
        }

        //removes the page from local pages array whose _id matches the pageId parameter
        function deletePage(pageID) {

        }

    }
})();
