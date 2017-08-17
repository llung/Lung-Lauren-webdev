(function () {
    angular
        .module("projectApp")
        .controller("CourseController", CourseController);

    function CourseController($location, $rootScope) {
        var model = this;

        //declare functions here for recordkeeping
        model.unregisterCourse = unregisterCourse;

        function init() {

        }

        init();

        function unregisterCourse(course, userId) {}
    }

})();
