var app = angular.module('app');

app.factory('ManagePasswordService', ['$http','$rootScope','$q',function($http,$rootScope,$q) {
	return {
		getAllCredentials: function() {
			req = {
					method: 'GET',
					url: 'http://localhost:5000'+'/api/getAllData'
					}
			return $http(req).success(function(response) {
							return response;
						}); 
		}
    };
  }]);