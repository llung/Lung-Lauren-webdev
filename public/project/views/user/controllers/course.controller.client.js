(function () {
    angular
        .module("projectApp")
        .controller("CourseController", CourseController);

    function CourseController($location, coursesService, userService, $rootScope) {
        var model = this;

        //declare functions here for recordkeeping
        model.unregisterCourse = unregisterCourse;
        model.viewClass = viewClass;

        function init() {

        }

        init();

        function unregisterCourse(courseId, userId) {
            coursesService.removeStudent(courseId, userId);
            userService.removeCourse(courseId, userId);
        }

        function viewClass(courseId) {
            course.getCourseById(courseId);
            //go to course page
        }


    }

})();
