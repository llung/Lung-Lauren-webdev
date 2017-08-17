(function () {
    angular
        .module("projectApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($location, userService, coursesService, $rootScope) {
        var model = this;

        model.update = update;
        model.unregister = unregister;
        model.logout = logout;

        function init() {

        }

        init();

        function update(user) {
            var u = userService.updateUser(user);
            console.log(u);
            $location.url("/profile");
        }

        function unregister(user) {
            var courses = coursesService.getCoursesByUserId(user._id);
            for (var c in courses) {
                courses[c].removeStudent(user._id);
            }
            userService.deleteUser(user._id);
        }

        function logout() {
            userService
                .logout()
                .then ( function (res) {
                    $location.url("/logout");
                })

        }

    }

})();
