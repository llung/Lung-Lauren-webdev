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
            $location.url("/profile/:" + user._id);
        }
    }

})();
