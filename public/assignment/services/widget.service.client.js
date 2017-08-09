(function () {
    angular
        .module("WebAppMaker")
        .factory("widgetService", widgetService);

    function widgetService($http) {
        var api = {
            "createWidget": createWidget,
            "findWidgetByPageID": findWidgetByPageID,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget
        };
        return api;

        //adds the widget parameter instance to the local widgets array. The new widget's pageId is set to the pageId parameter
        //POST "/api/page/:pageId/widget"
        function createWidget(pageId, widget) {
            var url = "/api/page/" + pageId + "/widget";
            return $http.post(url, widget);
        }

        //retrieves the widgets in local widgets array whose pageId matches the parameter pageId
        //GET "/api/page/:pageId/widget"
        function findWidgetByPageID(_pageId) {
            var url = "/api/page/" + pageId + "/widget";
            return $http.get(url);
        }

        //retrieves the widget in local widgets array whose _id matches the widgetId parameter
        //GET "/api/widget/:widgetId"
        function findWidgetById(widgetId) {
            var url = "/api/widget/" + widgetId;
            return $http.get(url);

        }

        //updates the widget in local widgets array whose _id matches the widgetId parameter
        //PUT "/api/widget/:widgetId"
        function updateWidget(widgetId, widget) {
            var url = "/api/widget/" + widgetId;
            return $http.put(url, widget);
        }

        //removes the widget from local widgets array whose _id matches the widgetId parameter
        //DELETE "/api/widget/:widgetId"
        function deleteWidget(widgetId) {
            var url = "/api/widget/" + widgetId;
            return $http.delete(url);
        }


    }
})();