(function() {
	var app = angular.module("app");
	function LoginController(userService, $state) {
		this.user = {
			email: "",
			password: ""
		};
		this.login = function () {
			userService.login(this.user).then(function (response) {
				$state.go('dashboard');
			}).catch(function (error) {
				console.log(error)
			});
		};
	};
	LoginController.$inject = ['userService', '$state'];
	app.controller('loginController', LoginController)
})();