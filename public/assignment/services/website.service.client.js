(function () {
    angular
        .module("WebAppMaker")
        .service("websiteService", websiteService);

    function websiteService($http) {
        //they are declared this this because the is a "service" not a "factory"
        this.findWebsitesByUser = findWebsitesByUser;
        this.createWebsite = createWebsite;
        this.findWebsiteById = findWebsiteById;
        this.updateWebsite = updateWebsite;
        this.deleteWebsite = deleteWebsite;

        //retrieves the website in local 'websites' array whose _id matches the websiteId parameter
        //GET "/api/website/:websiteId"
        function findWebsiteById(userId, websiteId) {
            var url = "/api/user/website/" + websiteId;
            return $http.get(url);
        }

        //adds the website parameter instance to the local 'websites' array. The new website's 'developerId' is set to
        //the userId parameter
        //POST "/api/user/:userId/website"
        function createWebsite(userId, website) {
            var url = "/api/user/" + userId + "/website";
            return $http.post(url, website);
        }

        //retrieves the websites in local websites array whose developerId matches the parameter userId
        //GET "/api/user/:userId/website"
        function findWebsitesByUser(userId) {
            var url = "/api/user/" + userId + "/website";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });

        }

        //updates the website in local 'websites' array whose _id matches the websiteId parameter
        //PUT "/api/user/:userId/website"
        function updateWebsite(websiteID, website) {
            var url = "/api/user/" + websiteId + "/website";   //userId???
            return $http.put(url, website);
        }

        //removes the website from local websites array whose _id matches the websiteId parameter
        //DELETE "/api/user/:userId/website"
        function deleteWebsite(userId, website) {
            var url = "api/user" + userId + "/website";
            return $http.delete(url, website);
        }

    }
})();