//config for the site once a user is logged in

(function () {
    angular
        .module("projectApp")
        .config(Config);

    function Config($routeProvider, $httpProvider) {

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
        $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
        $httpProvider.defaults.headers.post['Access-Control-Max-Age'] = '1728000';

        $routeProvider

            .when("/", {
                templateUrl: "user/templates/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model",
                resolve: {
                    user: checkLogin
                }
            })
            .when("/friends", {
                templateUrl: "user/templates/friends.view.client.html",
                controller: "FriendsController",
                controllerAs: "model"
            })
            .when("/courses", {
                templateUrl: "user/templates/courses-list.view.client.html",
                controller: "CourseListController",
                controllerAs: "model"
            })
            .when("/profile", {
                templateUrl: "user/templates/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model",
                resolve: {
                    user: checkLogin
                }
            })

            .otherwise({
                redirectTo : function() {
                    window.location = "../index.html";
                }
            })








            .when("/newcourse", {
                templateUrl: "user/templates/courses-new.view.client.html",
                controller: "CourseListController",
                controllerAs: "model"
            })
            .when("/viewcourse", {
                templateUrl: "user/templates/course.view.client.html",
                controller: "CourseListController",
                controllerAs: "model"
            })
            .when("/friendProfile", {
                templateUrl: "user/templates/friend-profile.view.client.html",
                controller: "CourseListController",
                controllerAs: "model"
            })
            .when("/classRoster", {
                templateUrl: "user/templates/registered-students.view.client.html",
                controller: "RegisteredStudentsController",
                controllerAs: "model"
            })
            .when("/courseSearch", {
                templateUrl: "user/templates/course-search.view.client.html",
                controller: "CourseSearchController",
                controllerAs: "model"
            })

    }
    function checkLogin(userService, $q, $location) {
        var deferred = $q.defer();
        userService
            .checkLogin()
            .then(function (user) {
                if(user === '0') {
                    deferred.reject();
                    $location.url("/login");
                } else {
                    deferred.resolve(user);
                }
            });
        return deferred.promise;
    }
})();

