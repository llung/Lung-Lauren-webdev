angular
    .module("TestApp", [])
    .controller("TestApp", TestApp);

function TestApp($scope) {
    $scope.hello = "Hello from TestApp";
}
