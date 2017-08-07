(function() {
    angular
        .module("WebAppMaker")
        .controller("NewWebsiteController", NewWebsiteController);

    function NewWebsiteController($location, $routeParams, websiteService) {
        var model = this;
        model.userId = $routeParams["uid"];

        console.log(model.userId);

        function init() {
            model.websites = websiteService.findWebsitesByUser(model.userId);
        }
        init();
    }

})();
