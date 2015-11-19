(function(module) {
try { module = angular.module("app"); }
catch(err) { module = angular.module("app", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("public/js/directives/templates/story.html",
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\" ng-bind=\"data.title\" ui-sref=\"story.details({storyId: data._id})\"></div>\n" +
    "  <div class=\"panel-body\"  ng-bind=\"data.desc\">Panel Content</div>\n" +
    "</div>");
}]);
})();
