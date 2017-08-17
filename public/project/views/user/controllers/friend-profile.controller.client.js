(function () {
    angular
        .module("projectApp")
        .controller("FriendsController", FriendsController);

    function FriendsController($location, $rootScope) {
        var model = this;

        model.unfriend = unfriend;
        model.addFriend = addFriend;

        function init() {

        }

        init();

        function addFriend(identifier) {

        }

        function unfriend(identifier) {

        }
    }

})();
