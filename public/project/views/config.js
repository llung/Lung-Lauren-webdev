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
                controllerAs: "model"
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

    }
})();

