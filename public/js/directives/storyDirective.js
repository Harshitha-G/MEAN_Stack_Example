(function() {
	var app = angular.module("app");
	function StoryDirective() {
		return {
			restrict: "E",
			templateUrl: "js/directives/templates/story.html",
			scope: {
				data: "="
			}
		}
	};
	app.directive('story', StoryDirective)
})();