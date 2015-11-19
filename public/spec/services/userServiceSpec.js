describe("User Service", function () {
	var userService, $httpBackend, users, user = "user-1";
	users = [
		"user-1",
		"user-2"
	];
	beforeEach(module("app"));
	beforeEach(inject(function ($injector) {
		userService = $injector.get('userService');
		$httpBackend = $injector.get('$httpBackend');
	}));

	it("Testing getUsers function with out id", function () {
		$httpBackend.expectGET('/api/user').respond(users);
		userService.getUsers().then(function(response) {
	      expect(response.data).toEqual(users);
	    });
		$httpBackend.flush();
	});

	it("Testing getUsers function with id", function () {
		$httpBackend.expectGET('/api/user/user-1').respond(user);
		userService.getUsers('user-1').then(function(response) {
	      expect(response.data).toEqual(user);
	    });
		$httpBackend.flush();
	});

	it("Testing signUp function", function () {
		var newUser = {
			email: "chnvrm@gmail.com",
			name: "",
			password: ""
		};
		$httpBackend.expectPOST('/api/user/insertUser', newUser).respond(user);
		userService.signUp(newUser).then(function(response) {
	      expect(response.data).toEqual(user);
	    });
		$httpBackend.flush();
	});

	it("Testing Login function", function () {
		var existingUser = {
			email: "",
			password: ""
		};
		$httpBackend.expectPOST('/api/user/insertUser', existingUser).respond('ok');
		userService.signUp(existingUser).then(function(response) {
	      expect(response.data).toEqual('ok');
	    });
		$httpBackend.flush();
	});
});