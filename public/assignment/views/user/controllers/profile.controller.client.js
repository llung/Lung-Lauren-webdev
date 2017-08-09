(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, userService) {
        var model = this;
        model.userId = $routeParams["uid"];

        function init() {
            var promise = userService.findUserById(model.userId);
            promise.then(function(response) {
                model.user = response.data;
            });
        }

        init();

        function updateUser(user) {
            userService.updateUser(user.Id, user);
        }
    }
})();
