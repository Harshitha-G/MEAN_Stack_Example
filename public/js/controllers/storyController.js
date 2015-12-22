(function() {
	var app = angular.module("app");
	function StoryController(storyService) {
		var vm = this;
		this.getStories = function () {
			storyService.getStory().then(function (response) {
				vm.stories = response;
			}).catch(function (error) {
				console.log(error)
			});
		};
		this.getStories();
	};
	StoryController.$inject = ['storyService'];
	app.controller('storyController', StoryController);
})();