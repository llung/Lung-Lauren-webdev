(function() {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController)

        function RegisterController($location, userService) {
            var model = this;

            //declare all (event handlers) functions here for record keeping
            model.registerUser = registerUser;

            function init(){

            }
            init();

            function registerUser(user) {
                console.log(user);

                if (userService.findUserByUsername(user.username) != null) {
                    model.error = "User already exists";
                }
                else {
                    var _user = userService.createUser(user);
                    console.log(_user);
                    $location.url("/user/" + _user._id);
                }

            }
    }

})();
