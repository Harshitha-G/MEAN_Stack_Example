describe("Story Details Controller", function () {
	var $controller, $scope, storyService, story;
	story =  'story-1';
	beforeEach(module("app"));
	beforeEach(inject(function (_$controller_, _$rootScope_, _$q_) {
		$controller = _$controller_;
		$scope = _$rootScope_.$new();
		$q = _$q_;
	}));

	it("Testing getStory success function", function () {
		storyService = {
			getStory: function (id) {
				return $q.when(story);
			}
		};
		var storyDetailsController = $controller("storyDetailsController", {
			$scope: $scope,
			storyService: storyService
		});
		//no need to call this storyDetailsController.getStory("story-1"); because this is called in controllers init function
		$scope.$apply();
		expect(storyDetailsController.story).toEqual(story);
	});

	it("Testing getStory failure function", function () {
		storyService = {
			getStory: function () {
				return $q.reject("getStory failure scenario in Story Details Controller");
			}
		};
		var storyDetailsController = $controller("storyDetailsController", {
			$scope: $scope,
			storyService: storyService
		});
		$scope.$apply();
		expect(storyDetailsController.story).not.toBeDefined();
	});
});