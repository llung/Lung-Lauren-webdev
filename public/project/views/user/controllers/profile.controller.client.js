(function () {
    angular
        .module("projectApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($location, userService, courseService, $rootScope) {
        var model = this;

        model.update = update;
        model.unregister = unregister;

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

    }

})();
