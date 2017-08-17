(function () {
    angular
        .module("projectApp")
        .controller("CoursesNewController", CoursesNewController);

    function CoursesNewController($location, courseService, userService, $rootScope) {
        var model = this;

        model.addCourse = addCourse;

        function init() {

        }

        init();

        function addCourse(course, userId) {
            courseService.createCourse(course);
            userService.addCourse(course, userId)
        }
    }

})();
