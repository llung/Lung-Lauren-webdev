(function () {
    angular
        .module("WebAppMaker")
        .factory("userService", userService);

    function userService($http) {

        var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder", isAdmin: true  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];

        var api = {
            "createUser" : createUser,
            "findUserByUsername": findUserByUsername,
            "findUserByCredentials": findUserByCredentials,
            "findUserById": findUserById,
            "registerUser": registerUser,   //same as create??
            "updateUser": updateUser,
            "deleteUser" : deleteUser
        };
        return api;

        //add the 'user' parameter to the local array
        function createUser(user) {
            user._id = (new Date()).getTime() + "";
            users.push(user);
            return user;
        }

        //updates the user in the local 'users' array whose _id matches the userId parameter
        function updateUser(userId, user) {
            for(var u in users) {
                if(users[u]._id === userId) {
                    users[u] = user;
                    return;
                }
            }
            //var url = "/api/user/" + userId;
            //return $http.put(url, user);
        }

        //
        function registerUser(user) {      /////////same as createUser??
            var url = "/api/user";
            return $http.post(url, user);
        }

        //returns the user in local 'user' array whose username matches the 'username' parameter
        function findUserByUsername(username) {
            for(var u in users) {
                if(users[u].username === username) {
                    return users[u];
                }
            }
            return null;
            // var url = "/api/user?username="+username;
            //return $http.get(url);
        }

        //returns the user in local 'userId' array whose username matches the 'userId' parameter
        function findUserById(userId) {
            for(var u in users) {
                if(users[u]._id === userId) {
                    return users[u];
                }
            }
            return null;
            //return $http.get("/api/user/"+userId);
        }

        //return the user whose username and password match the username and password parameter
        function findUserByCredentials(username, password) {
            for(var u in users) {
                var _user = users[u];
                if (_user.username === username && _user.password === password) {
                    return _user
                }
                return null;
            }
            //var url = "/api/user?username="+username+"&password="+password;
            // /user?username=alice&password=alice
            //return $http.get(url);
        }

        //remove the user whose _user whose _id matches the userId parameter
        function deleteUser(userID) {
            var url = "/api/user/" + userId;
            return $http.remove(url);
        }

    }
})();