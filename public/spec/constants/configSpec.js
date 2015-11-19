describe("Config Constant", function () {
	var config;
	beforeEach(module("app"));
	beforeEach(inject(function (_config_) {
		config = _config_;
	}));
	it("checking constant with constant value should match", function () {
		var configValue = {
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
		};
		expect(config).toEqual(configValue);
	});
});