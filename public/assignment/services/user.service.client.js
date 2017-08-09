(function () {
    angular
        .module("WebAppMaker")
        .factory("userService", userService);

    function userService($http) {
        var api = {
            "createUser" : createUser,
            "findUserByUsername": findUserByUsername,
            "findUserByCredentials": findUserByCredentials,
            "findUserById": findUserById,
            "updateUser": updateUser,
            "deleteUser" : deleteUser
        };
        return api;

        //add the 'user' parameter to the local array
        //POST "/api/user"
        function createUser(user) {
            var url = "/api/user";
            $http.post(url, user);
        }

        //updates the user in the local 'users' array whose _id matches the userId parameter
        //PUT "/api/user/:userId"
        function updateUser(userId, user) {
            var url = "/api/user/" + userId;
            return $http.put(url, user);
        }

        //returns the user in local 'user' array whose username matches the 'username' parameter
        //GET "/api/user?username=username"
        function findUserByUsername(username) {
            var url = "/api/user?username=" + username;
            return $http.get(url);
        }

        //returns the user in local 'userId' array whose username matches the 'userId' parameter
        //GET "/api/user/:userId"
        function findUserById(userId) {
            var url = "/api/user/" + userId;
            return $http.get(url);
        }

        //return the user whose username and password match the username and password parameter
        //GET "/api/user?username=username&password=password"
        function findUserByCredentials(username, password) {
            var url = "/api/user?username="+username+"&password="+password;
            return $http.get(url);
        }

        //remove the user whose _user whose _id matches the userId parameter
        function deleteUser(userID) {
            var url = "/api/user/" + userId;
            return $http.remove(url);
        }

    }
})();