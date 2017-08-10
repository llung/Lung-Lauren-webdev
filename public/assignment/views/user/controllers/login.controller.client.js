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
                model.error = "User not found";
                return;
            }
            var promise = userService.findUserByCredentials(user.username, user.password);
            promise
                .then(function (response) {
                    var _user = response.data;
                    console.log(_user)
                    if(_user === "0") {
                        model.error = "User not found";
                    } else {
                        $location.url("profile/"+_user._id);
                    }
                });
        }
    }

})();
