(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($location, $routeParams, pageService) {
        var model = this;
        model.websiteId = $routeParams["wid"];
        model.userId = $routeParams["uid"];


        function init() {
            model.pages = pageService.findPageByWebsiteId(model.websiteId);
        }

        init();
    }
})();
