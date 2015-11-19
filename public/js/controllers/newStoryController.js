(function() {
	var app = angular.module("app");
	function NewStoryController($scope, storyService, userService, $state, $stateParams) {
		vm = this;
		this.story = {
		    title: "",
		    desc: "",
		    assignee: "",
		    status: "",
		    storyPoints: 0,
		    estimatedHours: 0,
		    loggedHours: 0,
		    attachements: []
		};
		this.user = [];
		this.getUsers = function () {
			userService.getUsers().then(function (response) {
				vm.users = response.data;
			}).catch(function (error) {
				console.log(error)
			});
		};
		this.addStory = function () {
			storyService.addStory(this.story).then(function (response) {
				$state.go('story.details',{
					storyId: response.data
				});
			}).catch(function (error) {
				console.log(error)
			});
		};
		this.init = function () {
			this.getUsers();
		};
		this.init();
	};
	NewStoryController.$inject = ['$scope', 'storyService', 'userService', '$state', '$stateParams'];
	app.controller('newStoryController', NewStoryController)
})();