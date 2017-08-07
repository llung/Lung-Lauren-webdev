(function () {
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController);

    function EditWebsiteController($routeParams, websiteService) {
        var model = this;
        model.websiteId = $routeParams["wid"];
        model.userId = $routeParams["uid"];

        //declare functions here for recordkeeping
        model.updateWebsite = updateWebsite;
        model.deleteWebsite = deleteWebsite;

        function init() {
            model.website = websiteService.findWebsiteById(model.userId, model.websiteId);
        }

        init();

        function updateWebsite() {
            websiteService.updateWebsite(model.websiteId, website);
        }

        function deleteWebsite() {
            websiteService.deleteWebsite(model.websiteId);
        }


    }

})();
