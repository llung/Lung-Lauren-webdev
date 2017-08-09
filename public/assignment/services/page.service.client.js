(function () {
    angular
        .module("WebAppMaker")
        .factory("pageService", pageService);

    function pageService($http) {

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
        //POST "/api/website/:websiteId/page"
        function createPage(websiteId, page) {
            var url = "/api/website/" + websiteId;
            return $http.post(url, page);
        }

        //updates the page in local pages array whose _id matches the pageId parameter
        //PUT "/api/page/:pageId
        function updatePage(pageId, page) {
            var url = "/api/page/" + pageId;
            return $http.put(url, page);
        }

        //retrieves the page in local pages array whose _id matches the pageId parameter
        //GET "/api/page/:pageId"
        function findPageById(pageId) {
            var url = "/api/page/" + pageId;
            return $http.get(url);
        }

        //retrieves the pages in local 'pages' array whose websiteId matches the websiteId parameter
        //GET "/api/website/:websiteId/page"
        function findPageByWebsiteId(websiteId) {
            var url = "api/website/" + websiteId +"/page";
            return $http.get(url);
        }

        //removes the page from local pages array whose _id matches the pageId parameter
        //DELETE "/api/page/:pageId"
        function deletePage(pageID) {
            var url = "api/page/" + pageId;
            return $http.delete(url);
        }

    }
})();
