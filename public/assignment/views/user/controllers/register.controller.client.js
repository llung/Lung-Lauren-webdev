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
    }

})();
