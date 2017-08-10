(function () {
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController);

    function EditWebsiteController($location, $routeParams, websiteService) {
        var model = this;
        model.websiteId = $routeParams["wid"];
        model.userId = $routeParams["uid"];

        //declare functions here for recordkeeping
        model.updateWebsite = updateWebsite;
        model.deleteWebsite = deleteWebsite;

        function init() {
            //model.website = websiteService.findWebsiteById(model.userId, model.websiteId);

            var promise = websiteService.findWebsiteById(model.userId, model.websiteId);
            promise.then(function(response) {
                model.website = response.data;
            });
        }

        init();

        function updateWebsite(_website) {
            websiteService.updateWebsite(_website._id, _website);
        }

        function deleteWebsite(_website) {
            websiteService.deleteWebsite(_website._id);
        }


    }

})();
