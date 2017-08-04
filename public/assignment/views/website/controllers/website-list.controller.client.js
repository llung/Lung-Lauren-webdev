(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController(websiteService) {
        var model = this;
        model.userId = $routeParams["userId"];
        function init() {
            model.websites = websiteService.findWebsitesByUser(userId);
        }
        init();

    }

})();
