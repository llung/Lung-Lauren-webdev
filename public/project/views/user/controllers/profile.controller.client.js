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
            userService.updateUser(user);
        }

        function unregister(userId) {
            var courses = courseServer.getCoursesByUserId(userId);
            for (var c in courses) {
                courses[c].removeStudent(userId);
            }
            userService.deleteUser(userId);
        }

        function logout() {
            userService
                .logout()
                .then ( function (res) {
                    $location.url("/");
                })

        }

    }

})();
