
(function() {
    var app = angular.module("app", ['ui.router']);
    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'loginController',
            controllerAs: 'vm'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'views/signup.html',
            controller: 'signupController',
            controllerAs: 'vm'
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard.html',
            controller: 'storyController',
            controllerAs: 'vm'
        })
        .state('story', {
            url: '/story',
            templateUrl: 'views/story.html',
            abstract: true
        })
        .state('story.list', {
            url: '/storiesList',
            templateUrl: 'views/storiesList.html',
            controller: 'storyController',
            controllerAs: 'vm'
        })
        .state('story.details', {
            url: '/storyDetails/:storyId',
            templateUrl: 'views/storyDetails.html',
            controller: 'storyDetailsController',
            controllerAs: 'vm'
        })
        .state('story.newStory', {
            url: '/newStory',
            templateUrl: 'views/newStory.html',
            controller: 'newStoryController',
            controllerAs: 'vm'
        });
        $urlRouterProvider.otherwise('/login');
    }]);
})();