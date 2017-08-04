(function() {
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController);

    function EditWebsiteController($routeParams, websiteService) {
        var model = this;
        model.websiteId = $routeParams.websiteId;
        model._id = $routeParams["_id"];

        //declare functions here for recordkeeping
        model.updateWebsite = updateWebsite;
        model.deleteWebsite = deleteWebsite;

        function init() {
            model.website = websiteService.findWebsiteById(model._id);
        }
        init();

        function updateWebsite(website) {
            websiteService.updateWebsite(model.websiteId, website);
        }

        function deleteWebsite() {
            websiteService.deleteWebsite(model.websiteId);
        }



    }

})();
