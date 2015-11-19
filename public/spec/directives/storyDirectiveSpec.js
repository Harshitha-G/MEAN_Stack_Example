describe('Unit testing story directive', function() {
  var $compile,
      $rootScope;

  // Load the myApp module, which contains the directive
  beforeEach(module('app'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function(_$compile_, _$rootScope_, $templateCache){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    template = $templateCache.get('public/js/directives/templates/story.html');
    $templateCache.put('js/directives/templates/story.html',template);

  }));

  it('Replaces the element with the appropriate content', function() {
    // Compile a piece of HTML containing the directive
    var $scope = $rootScope.$new();
    $scope.story = {
        _id: "story-1",
        title: "junit poc",
        desc: "junit poc..."
    };
    var element = $compile('<story data="story"></story>')($scope);
    // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
    $scope.$digest();
    // Check that the compiled element contains the templated content
    //expect(element.find("div[ng-bind='data.title']").text()).toEqual("junit poc");
    //expect(element.find("div[ng-bind='data.desc']").text()).toEqual("junit poc...");
    expect(element.html()).toContain("junit poc");
  });
});