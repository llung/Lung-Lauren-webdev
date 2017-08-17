(function () {
    angular
        .module("projectApp")
        .controller("CourseListController", CourseListController);

    function CourseListController($location, $rootScope) {
        var model = this;

        //declare functions here for recordkeeping
        //model.unregisterCourse = unregisterCourse;

        function init() {

        }

        init();

    }

})();
