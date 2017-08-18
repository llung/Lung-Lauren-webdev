(function () {
    angular
        .module("projectApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($location, userService, coursesService, $rootScope, user) {
        var model = this;
        var userId = user._id;

        model.update = update;
        model.unregister = unregister;
        model.logout = logout;

        function init() {
            userService.findUserById(userId)
                .then(function (response) {
                    model.user = response.data;
                });
        }

        init();

        function update(user) {
            var u = userService.updateUser(user);
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
