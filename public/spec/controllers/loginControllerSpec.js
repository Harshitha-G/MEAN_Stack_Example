describe("Login Controller", function () {
	var $controller, $scope, userService, $state, userObj;
	userObj = {
		email: "chnvrm@gmail.com",
		password: "Password#1"
	};

	beforeEach(module("app"));
	beforeEach(inject(function (_$controller_, _$rootScope_, _$q_) {
		$controller = _$controller_;
		$scope = _$rootScope_.$new();
		$q = _$q_;
		$state = {
			go: function(state) {

			}
		};
	}));

	it("Testing login success function", function () {
		userService = {
			login: function (obj) {
				return $q.when(obj);
			}
		};
		var loginController = $controller("loginController", {
			userService: userService,
			$state: $state
		});
		spyOn($state, 'go');
		spyOn(userService, 'login').and.callThrough();
		loginController.user.email = userObj.email;
		loginController.user.password = userObj.password;
		loginController.login(userObj);		
		expect(userService.login).toHaveBeenCalledWith(userObj);
		$scope.$apply();
		/*
			This $scope.$apply() is the important piece actually.
			If you don't call it, your promise won't get resolved/rejected.
		*/
		expect($state.go).toHaveBeenCalledWith("dashboard");
	});
	it("Testing login failure function", function () {
		userService = {
			login: function (obj) {
				return $q.reject('login failure scenario in Login Controller');
			}
		};
		var loginController = $controller("loginController", {
			userService: userService,
			$state: $state
		});
		spyOn($state, 'go');
		loginController.login(userObj);
		$scope.$apply();
		expect($state.go).not.toHaveBeenCalled();
	});
});