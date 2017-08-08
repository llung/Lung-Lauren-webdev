(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($sce, $routeParams, widgetService) {
        var model = this;

        model.userId = $routeParams["uid"];
        model.websiteId = $routeParams["wid"];
        model.pageId = $routeParams["pid"];

        //declare all functions for record
        model.trustHtmlContent = trustHtmlContent;
        model.trustUrlResource = trustUrlResource;
        //model.getWidgetTypeUrl = getWidgetTypeUrl;


        function init() {
            model.widgets = widgetService.findWidgetByPageID(model.pageId);
        }

        init();

        function trustHtmlContent(text) {
            return $sce.trustAsHtml(text);
        }

        function trustUrlResource (url) {
            var youtubeUrl = "https://www.youtube.com/embed/";
            var urlParts = url.split("/");
            youtubeUrl += urlParts[urlParts.length - 1];
            return $sce.trustAsResourceUrl(youtubeUrl);
        }
    }

    //function getWidgetTypeUrl(widgetType) {}


})();
