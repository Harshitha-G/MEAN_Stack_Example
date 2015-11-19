/*
	Note:
	1) if we are using single it satement we can use inject directly in the it statement as shown below
		it("Testing getStory success function", inject(function (_$controller_, _$rootScope_, _$q_) {
			//some code
		}));
		we used inject in beforeEach to reduce the redundency
	2) $scope <=> _$scope_ (ie., angular-mock will exclude the prefixed and postfixed "_")
	3) we use this notation for just naming convention
*/
describe("Story Controller", function () {
	var $controller, $scope, storyService, stories;
	stories = [
		"story-1",
		"story-2"
	];
	beforeEach(module("app"));
	beforeEach(inject(function (_$controller_, _$rootScope_, _$q_) {
		$controller = _$controller_;
		$scope = _$rootScope_.$new();
		$q = _$q_;
	}));

	it("Testing getStory success function", function () {
		storyService = {
			getStory: function () {
				return $q.when(stories);
			}
		};
		var storyController = $controller("storyController", {
			$scope: $scope,
			storyService: storyService
		});
		storyController.getStories();
		$scope.$apply();
		expect(storyController.stories).toEqual(stories);
	});

	it("Testing getStory failure function", function () {
		storyService = {
			getStory: function () {
				return $q.reject('getStory failure scenario in Story Controller');
			}
		};
		var storyController = $controller("storyController", {
			$scope: $scope,
			storyService: storyService
		});
		storyController.getStories();
		$scope.$apply();
		expect(storyController.stories).not.toBeDefined();
	});
});