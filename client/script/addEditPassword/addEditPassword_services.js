var app = angular.module('app');

app.factory('PasswordService', ['$http','$rootScope','$q',function($http,$rootScope,$q) {
	return {
		saveObject: function(_object) {
			req = {
					method: 'POST',
					url: 'http://localhost:5000'+'/api/saveObject', 
					 data : _object
					}
			return $http(req).success(function(response) {
							return response;
						}); 
		},
		getObject: function(_objectId) {
			req = {
					method: 'GET',
					url: 'http://localhost:5000'+'/api/getObject/'+_objectId, 
					}
			return $http(req).success(function(response) {
							return response;
						}); 
		},
		updateObject: function(_object) {
			req = {
					method: 'PUT',
					url: 'http://localhost:5000'+'/api/updateObject/'+_object._id, 
					data: _object
					}
			return $http(req).success(function(response) {
							return response;
						}); 
		},
		deleteObject: function(_object) {
			req = {
					method: 'DELETE',
					url: 'http://localhost:5000'+'/api/deleteObject/'+_object._id
					}
			return $http(req).success(function(response) {
							return response;
						}); 
		}
    };
  }]);