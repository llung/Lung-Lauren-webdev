(function() {
    angular
        .module("WebAppMaker")
        .controller("EditPageController", EditPageController)

    function EditPageController($location, $routeParams, pageService) {
        var model = this;
        model.websiteId = $routeParams["wid"];
        model.userId = $routeParams["uid"];
        model.pageId = $routeParams["pid"];

        function init() {
            model.pages = pageService.findPageByWebsiteId(model.websiteId);
        }

        init();
    }
})();