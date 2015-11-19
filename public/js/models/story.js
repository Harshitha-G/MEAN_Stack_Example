(function(){
	function StoryModel() {
		function Story (storyId, title, desc, assignee, status, storyPoints, estimatedHours, loggedHours, attachements) {
			this.storyId = storyId
			this.title = title,
	        this.desc = desc,
	        this.assignee = assignee,
	        this.status = status,
	        this.storyPoints = storyPoints,
	        this.estimatedHours = estimatedHours,
	        this.loggedHours = loggedHours,
	        this.attachements = attachements
		};

		Story.apiResponseTransformer = function (response) {
			if(response.data.records === null) {
				var record = response.data.record;
				return new Story(record._id, record.title, record.desc, record.assignee, record.status, record.storyPoints, record.estimatedHours, record.loggedHours, record.attachements);
			}
			var records = response.data.records, size = records.length, index, data = [];
			for (index = 0; index < size; index++) {
				record = records[index];
				data.push(new Story(record._id, record.title, record.desc, record.assignee, record.status, record.storyPoints, record.estimatedHours, record.loggedHours, record.attachements));
			}
			return data;
		};

		return Story
	};
	StoryModel.$inject = [];
	angular.module('app').factory('Story', StoryModel);
})();