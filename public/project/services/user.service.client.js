(function () {
    angular
        .module("projectApp")
        .factory("userService", userService);

    function userService($http) {
        var api = {
            "createUser" : createUser,
            //"findUserByUsername": findUserByUsername,
            "findUserByCredentials": findUserByCredentials,
            "removeCourse" : removeCourse,
            "addCourse" : addCourse,
            "findFriendById" : findFriendById,
            "findUserById": findUserById,
            "updateUser": updateUser,
            "deleteUser" : deleteUser,
            "login" : login,
            "logout" : logout
        };
        return api;


        function createUser(user) {
        }

        function findUserByCredentials(username, password) {
        }

        function removeCourse(courseId, userId) {
        }

        function addCourse(user, courseId) {
        }

        function findFriendById (userId) {
        }

        function findUserById(userId) {
        }

        function updateUser(userId, user) {
        }

        function deleteUser(userId) {
        }

        function login (user) {
            return $http.post("/api/login", user);
        }

        function logout(user) {
            return $http.post("/api/logout");
        }
    }
})();