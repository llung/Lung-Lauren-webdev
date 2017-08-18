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
            "logout" : logout,
            "addFriend" : addFriend,
            "unfriend" : unfriend,
            "checkLogin" :checkLogin
        };
        return api;


        function addFriend(username) {
            return $http.post("/api/addfriend", username);
        }

        function unfriend(username) {
            return $http.post(".api/removefriend", username);
        }
        function createUser(user) {
            return $http.post("/api/register", user);
        }

        function findUserByCredentials(username, password) {
        }

        function removeCourse(courseId, userId) {
            info.course = courseId;
            info.user = userId;
            $http.post("/api/removecourse", info);
        }

        function addCourse(user, courseId) {
        }

        function findFriendById (userId) {
        }

        function findUserById(userId) {
            return $http.get("/api/user/" + userId);
        }

        function updateUser(user) {
            return $http.post("/api/updateUser", user);
        }

        function deleteUser(userId) {
        }

        function login (user) {
            return $http.post("/api/login", user);
        }

        function logout(user) {
            return $http.post("/api/logout");
        }

        function checkLogin() {
            console.log("ddddddd");
            return $http.get("/api/checkLogin")
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();