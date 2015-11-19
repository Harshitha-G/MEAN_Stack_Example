(function(){
	function UserService($http, config) {
		this.signUp = function (user) {
			return $http({
				url: config.serviceUrls.user.signUp,
				method: 'POST',
				data: user
			})
		};
		this.login = function (user) {
			return $http({
				url: config.serviceUrls.login,
				method: 'POST',
				data: user
			})
		};
		this.getUsers = function (id) {
			var url =  config.serviceUrls.user.users;
			if (id) {
				url += "/" + id;
			}
			return $http({
				url: url,
				method: 'GET'
			})
		};
	};
	UserService.$inject = ['$http', 'config'];
	angular.module('app').service('userService', UserService);
})();