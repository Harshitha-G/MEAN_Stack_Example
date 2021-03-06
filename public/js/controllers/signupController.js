(function() {
	var app = angular.module("app");
	function SignupController(userService, $state) {
		this.user = {
			email: "",
			name: "",
			password: ""
		};
		this.signUp = function () {
			userService.signUp(this.user).then(function (response) {
				$state.go('dashboard');
			}).catch(function (error) {
				console.log(error)
			});
		};
	};
	SignupController.$inject = ['userService', '$state'];
	app.controller('signupController', SignupController)
})();