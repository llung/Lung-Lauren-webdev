(function() {
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController)

    function EditWebsiteController($routeParams, websiteService) {
        var model = this;
        model._id = $routeParams["_id"];
        function init() {
            model.website = websiteService.findWebsiteById(model._id);
        }
        init();

    }

})();
