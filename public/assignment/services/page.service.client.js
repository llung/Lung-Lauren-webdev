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

        function createPage(websiteId, page) {

        }

        function updatePage(pageId, page) {

        }

        function findPageById(pageId) {

        }

        function findPageByWebsiteId(websiteId) {

        }

        function deletePage(pageID) {

        }

    }
})();/**
 * Created by Lauren on 8/2/2017.
 */
