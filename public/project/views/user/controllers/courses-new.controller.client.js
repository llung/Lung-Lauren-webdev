(function () {
    angular
        .module("projectApp")
        .controller("CoursesNewController", CoursesNewController);

    function CoursesNewController($location, coursesService, userService, $rootScope) {
        var model = this;

        model.addCourse = addCourse;

        function init() {

        }

        init();

        function addCourse(course) {
            coursesService.createCourse(course);
            $location.url("/courseSearch");
        }
    }

})();
