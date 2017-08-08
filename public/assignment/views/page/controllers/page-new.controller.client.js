(function() {
    angular
        .module("WebAppMaker")
        .controller("NewPageController", NewPageController);

    function NewPageController($location, $routeParams, pageService) {
        var model = this;
        model.websiteId = $routeParams["wid"];
        model.userId = $routeParams["uid"];


        function init() {
            model.pages = pageService.findPageByWebsiteId(model.websiteId);
        }

        init();
    }
})();
