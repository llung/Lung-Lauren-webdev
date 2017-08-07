(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, userService) {
        var model = this;
        model.userId = $routeParams["uid"];

        function init() {
            model.user = userService.findUserById(model.userId);
        }

        init();

        function updateUser(user) {
            userService.updateUser(user.Id, user);
        }
    }
})();
