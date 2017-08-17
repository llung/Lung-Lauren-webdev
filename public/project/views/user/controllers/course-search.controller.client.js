(function () {
    angular
        .module("projectApp")
        .controller("CourseSearchController", CourseSearchController);

    function CourseSearchController($location, coursesService, userService, $rootScope) {
        var model = this;

        function init() {

        }

        init();


    }

})();
