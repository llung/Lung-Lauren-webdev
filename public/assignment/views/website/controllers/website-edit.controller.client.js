(function() {
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController)

    function EditWebsiteController($routeParams, websiteService) {
        var vm = this;
        vm._id = $routeParams["_id"];
        function init() {
            vm.website = websiteService.findWebsiteById(vm._id);
        }
        init();

    }

})();
