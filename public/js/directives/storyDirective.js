(function() {
	var app = angular.module("app");
	function StoryDirective() {
		return {
			restrict: "E",
			templateUrl: "js/directives/templates/story.html",
			scope: {
				data: "="
			},
			bindToController: true,
			controller: function() {
			},
			controllerAs: "vm"
		}
	};
	app.directive('story', StoryDirective)
})();