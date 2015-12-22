(function(module) {
try { module = angular.module("app"); }
catch(err) { module = angular.module("app", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("public/js/directives/templates/story.html",
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\" ng-bind=\"vm.data.title\" ui-sref=\"story.details({storyId: vm.data.storyId})\"></div>\n" +
    "  <div class=\"panel-body\"  ng-bind=\"vm.data.desc\">Panel Content</div>\n" +
    "</div>");
}]);
})();
