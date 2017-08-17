(function () {
    angular
        .module("projectApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, $rootScope, userService) {
        var model = this;

        model.register = register;
        function init() {

        }

        init();

        function register(user) {
            if (!user) {
                model.error = "Please enter valid information";
                return;
            }
            userService.createUser(user)

        }

    }

})();
