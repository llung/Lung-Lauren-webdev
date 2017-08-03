(function(){
    angular
        .module("WebAppMaker")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "views/user/login.view.client.html"
            })
        $routeProvider
            .when("/", {
                templateUrl: "views/user/login.view.client.html"
            })
        $routeProvider
            .when("/register", {
                templateUrl: "views/user/register.view.client.html"
            })
        $routeProvider
            .when("/user/:uid", {
                templateUrl: "views/user/profile.view.client.html"
            })
        $routeProvider
            .when("/user/:uid/website", {
                templateUrl: "views/website/website-list.view.client.html"
            })
        $routeProvider
            .when("/user/:uid/website/new", {
                templateUrl: "views/website/website-new.view.client.html"
            })
        $routeProvider
            .when("/user/:uid/website/:wid", {
                templateUrl: "views/website/website-edit.view.client.html"
            })
        $routeProvider
            .when("/user/:uid/website/:wid/page", {
                templateUrl: "views/page/page-list.view.client.html"
            })
        $routeProvider
            .when("/user/:uid/website/:wid/page/new", {
                templateUrl: "views/page/page-new.view.client.html"
            })
        $routeProvider
            .when("/user/:uid/website/:wid/page/:pid", {
                templateUrl: "views/page/page-edit.view.client.html"
            })
        $routeProvider
            .when("/user/:uid/website/:wid/page/:pid/widget", {
                templateUrl: "views/widget/widget-list.view.client.html"
            })
        $routeProvider
            .when("/user/:uid/website/:wid/page/:pid/widget/new", {
                templateUrl: "views/website/widget-chooser.view.client.html"
            })
        $routeProvider
            .when("/user/:uid/website/:wid/page/:pid/widget/:wgid", {
                templateUrl: "views/website/widget-edit.view.client.html"
            })
    }
})();



angular
    .controller("loginController", loginController)
    .controller("profileController", profileController)

function profileController($scope, $routeParams) {
    var userID = $routeParams["userID"]
    $scope.user = TheUserObject; //declare TheUserObject this will allow the html page to access the variables in the user object
}
function loginController($scope, $location) {
    var users = [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ];

    $scope.login = function(user) {
        for(var u in users) {
            var _user = users[u];
            if (_user.username === user.username && _user.password ===user.password) {
                $location.url("profile")
            }
        }
        $scope.errorMessage = "User not found";
    }
}

