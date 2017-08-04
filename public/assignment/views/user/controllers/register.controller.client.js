(function() {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController)

        function RegisterController(userService) {
            var model = this;

            //declare all functions here for record keeping
            model.registerUser = registerUser;

            function init(){

            }
            init();

            function registerUser(user) {
                userService.findUserByUsername(user.username)
                    .then(function (response) {
                        var _user = response.data;
                        if(_user === "0") {
                            return userService.createUser(user)
                        } else {
                            model.error = "User already exists";
                        }
                    })
                    .then(function (response) {
                        _user = response.data;
                        $location.url("/profile/" + _user._id);
                    });
            }
    }

})();
