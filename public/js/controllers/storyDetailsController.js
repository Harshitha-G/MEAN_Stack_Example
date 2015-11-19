(function() {
	var app = angular.module("app");
	function StoryDetailsController($scope, storyService, $stateParams) {
		vm = this;
		this.getStory = function () {
			storyService.getStory($stateParams.storyId).then(function (response) {
				vm.story = response;
			}).catch(function (error) {
				console.log(error)
			});
		};
		this.getStory($stateParams.storyId);
	};
	StoryDetailsController.$inject = ['$scope', 'storyService', '$stateParams'];
	app.controller('storyDetailsController', StoryDetailsController);
})();