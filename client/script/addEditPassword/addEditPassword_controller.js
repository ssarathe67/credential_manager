var app = angular.module('app');

app.controller('PasswordServiceCtrl', ['$scope','PasswordService','$state','$stateParams', function($scope,PasswordService,$state,$stateParams) {
	
	let object = {
		env: undefined,
		application: undefined,
		userId: undefined,
		password: undefined,
		url: undefined
	}
	$scope.object = angular.copy(object);
	/**
	* Get Object if in edit mode.
	*/
	if($stateParams.objectId){
		PasswordService.getObject($stateParams.objectId).then(function(response){
			$scope.object = angular.copy(response.data);
			if($stateParams.action == "copy")
				delete $scope.object._id;
		});
	}
	//getObject
	
	/**
	* Add function to password object.
	*/
	$scope.saveObject = function(){
		if(!$scope.credentialForm.$error.required){
			PasswordService.saveObject($scope.object).then(function(response){
				$scope.object = angular.copy(object);
				$state.go("manageCredential");
			});
		}
		
	}
	/****
	** Function to Update Credemntials Object.
	*/
	$scope.updateObject = function(){
		if(!$scope.credentialForm.$error.required){
			PasswordService.updateObject($scope.object).then(function(response){
				$scope.object = angular.copy(object);
				$state.go("manageCredential");
			});
		}
	}
	/***
	* Function to Delete Credentials Object.
	*/
	$scope.deleteObject = function(){
		PasswordService.deleteObject($scope.object).then(function(response){
			$scope.object = angular.copy(object);
			$state.go("manageCredential");
		});
	}
}]);
