(function () {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);

    function LoginController($location, userService, $rootScope) {
        var model = this;

        model.login = login;

        function init() {

        }

        init();

        function login(user) {
            if (!user) {
                model.errorMessage = "User not found";
                return;
            }
            var result = userService.findUserByCredentials(user.username, user.password);

            if (result === null) {
                model.errorMessage = "User not found";
            } else {
                $location.url("user/" + result._id);

            }
        }
    }

})();
