(function () {
    angular
        .module("projectApp")
        .factory("coursesService", coursesService);

    function coursesService($http) {
        var api = {
            "createCourse" : createCourse,
            "getCourseById" : getCourseById,
            "getCoursesByUserId" : getCoursesByUserId,
            "getStudentsByCourseId" : getStudentsByCourseId,
            "getAllCourse" : getAllCourse,
            "updateCourse" : updateCourse,
            "deleteCourse" : deleteCourse,
            "addStudent" : addStudent,
            "removeStudent" : removeStudent
        };
        return api;

        function createCourse(course) {
        }
        function getCourseById(courseId) {
        }
        function getCoursesByUserId(userId) {
        }
        function getStudentsByCourseId(courseId) {
        }
        function getAllCourse() {
        }
        function updateCourse(courseId) {
        }
        function addStudent(course) {
        }
        function removeStudent(courseId, userId) {
            info.course = courseId;
            info.user = userId;
            return $http.post("/api/removestudent", info)
        }
        function deleteCourse(courseId) {
        }


    }
})();