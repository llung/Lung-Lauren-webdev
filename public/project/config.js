(function(){
    angular
        .module("projectApp")
        .config(Config);

    function Config($routeProvider, $httpProvider) {

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
        $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
        $httpProvider.defaults.headers.post['Access-Control-Max-Age'] = '1728000';

        $routeProvider
            .when("/login", {
                templateUrl: "views/landing/templates/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/", {
                templateUrl: "views/landing/templates/landing.view.client.html",
                controller: "LandingController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "views/landing/templates/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .when("/about", {
                templateUrl: "views/landing/templates/info.view.client.html",
                controller: "InfoController",
                controllerAs: "model"
            })

            .when("/profile", {    ///////nope not working
                redirectTo : "views/home.html"
            })

    }
})();

