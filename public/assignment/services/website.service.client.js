(function () {
    angular
        .module("WebAppMaker")
        .service("websiteService", websiteService);

    function websiteService($http) {

        var websites = [
            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
            { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
        ];

        this.findWebsitesByUser = findWebsitesByUser;
        this.createWebsite = createWebsite;
        this.findWebsiteById = findWebsiteById;
        this.updateWebsite = updateWebsite;
        this.deleteWebsite = deleteWebsite;

        //retrieves the website in local 'websites' array whose _id matches the websiteId parameter
        function findWebsiteById(userId, websiteId) {
            var url = "/api/user/" + userId + "/website/" + websiteId;
            return $http.get(url);
        }

        //adds the website parameter instance to the local 'websites' array. The new website's 'developerId' is set to
        //the userId parameter
        function createWebsite(userId, website) {
            var url = "/api/user/" + userId + "/website";
            return $http.post(url, website);
        }

        //retrieves the websites in local websites array whose developerId matches the parameter userId
        function findWebsitesByUser(userId) {

            var url = "/api/user/" + userId + "/website";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        //updates the website in local 'websites' array whose _id matches the websiteId parameter
        function updateWebsite(websiteID, website) {
            //return $http
        }

        //removes the website from local websites array whose _id matches the websiteId parameter
        function deleteWebsite(websiteID) {
            //$http.remove(???);
        }

    }
})();