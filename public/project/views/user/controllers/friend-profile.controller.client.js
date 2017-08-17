(function () {
    angular
        .module("projectApp")
        .controller("FriendsController", FriendsController);

    function FriendsController($location, userService, $rootScope) {
        var model = this;

        model.unfriend = unfriend;
        model.addFriend = addFriend;

        function init() {
        }

        init();

        function addFriend(username) {
            userService.addFriend(username);
        }

        function unfriend(username) {
            userService.removeFriend(username);
        }
    }

})();
