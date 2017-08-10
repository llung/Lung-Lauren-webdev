(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($location, $routeParams, websiteService) {
        var model = this;
        model.userId = $routeParams["uid"];
        function init() {
            websiteService
                .findWebsitesByUser(model.userId)
                .then(function (response) {
                    model.websites = response.data;
                })
        }

        init();

    }

})();
