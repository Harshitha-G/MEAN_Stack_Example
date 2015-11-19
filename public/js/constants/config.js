(function() {
	var app = angular.module("app");
	app.constant('config', {
		serviceUrls: {
			login: "/api/login",
			user: {
				users: '/api/user',
				signUp: '/api/user/insertUser'
			},
			story: {
				addStory: '/api/story/insertStory',
				getStory: '/api/story'
			}
		}
	})
})();