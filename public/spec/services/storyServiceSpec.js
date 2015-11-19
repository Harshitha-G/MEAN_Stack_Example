describe("Story Service", function () {
	var storyService, $httpBackend, stories, story = {
		record: {
			_id: "story-1"
		},
		records: null
	};
	stories = {
		record: null,
		records: [
			{
				_id: "story-1"
			},
			{
				_id: "story-2"
			}
		]
	};
	beforeEach(module("app"));
	beforeEach(inject(function ($injector) {
		storyService = $injector.get('storyService');
		$httpBackend = $injector.get('$httpBackend');
		/*$httpBackend.when('GET', '/api/story')
            .respond(stories);*/
	}));

	it("Testing getStory function with out id", function () {
		$httpBackend.expectGET('/api/story').respond(stories);
		storyService.getStory().then(function(response) {
	      expect(response[0].storyId).toEqual(stories.records[0]._id);
	    });
		$httpBackend.flush();
	});

	it("Testing getStory function with id", function () {
		$httpBackend.expectGET('/api/story/story-1').respond(story);
		storyService.getStory('story-1').then(function(response) {
	      expect(response.storyId).toEqual(story.record._id);
	    });
		$httpBackend.flush();
	});

	it("Testing addStory function", function () {
		var newStory = {
		    title: "",
		    desc: "",
		    assignee: "",
		    status: "",
		    storyPoints: 0,
		    estimatedHours: 0,
		    loggedHours: 0,
		    attachements: []
		}
		$httpBackend.expectPOST('/api/story/insertStory', newStory).respond(story);
		storyService.addStory(newStory).then(function(response) {
	      expect(response.data).toEqual(story);
	    });
		$httpBackend.flush();
	});
});