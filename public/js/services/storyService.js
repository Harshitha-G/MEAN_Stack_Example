(function(){
	function StoryService($http, config, Story) {
		this.addStory = function (story) {
			return $http({
				url: config.serviceUrls.story.addStory,
				method: 'POST',
				data: story
			});
		};
		this.getStory = function (id) {
			var url =  config.serviceUrls.story.getStory;
			if (id) {
				url += "/" + id;
			}
			return $http({
				url: url,
				method: 'GET'
			}).then(Story.apiResponseTransformer);
		};
	};
	StoryService.$inject = ['$http', 'config', 'Story'];
	angular.module('app').service('storyService', StoryService);
})();