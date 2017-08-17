(function () {
    angular
        .module("projectApp")
        .controller("LoginController", LoginController);

    function LoginController($location, $rootScope,userService) {
        var model = this;

        model.login = login;

        function init() {

        }

        init();

        function login(user) {
            if (!user) {
                model.error = "User not found";
                return;
            }
            userService
                .login(user)
                .then (function(res) {
                    var user = res.data;
                    $location.path("/profile");
                })
        }
    }

})();
