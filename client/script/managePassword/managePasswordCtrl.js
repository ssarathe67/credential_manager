var app = angular.module('app');

app.controller('ManageCredentialCtrl', ['$scope','ManagePasswordService','PasswordService','$state', function($scope,ManagePasswordService,PasswordService,$state) {
	$scope.credentialList = [];
	/**
	* Get All Credentials Information and display it in tabular view
	*/
	ManagePasswordService.getAllCredentials().then(function(response){
		$scope.credentialList = angular.copy(response.data);
		loadFilters();
	});
	/**
	*  function to get different list for filtering.
	*/
	function loadFilters(){
		let envList = [];
		let appList = [];
		let credentialList = angular.copy($scope.credentialList);
		for(let i in credentialList){
			envList.push(credentialList[i].env);
			appList.push(credentialList[i].application);
		}
		
		envList = envList.filter((x, i, a) => a.indexOf(x) == i);
		appList = appList.filter((x, i, a) => a.indexOf(x) == i);
		
		$scope.envList = angular.copy(envList);
		$scope.appList = angular.copy(appList);
	}
	/**
	* function to reset the search option.
	*/
	$scope.reset = function(){
		$scope.filterByEnv = undefined;
		$scope.filterByApp = undefined;
		$scope.searchCredentials = undefined;
	}
	/***
	* Function to Update Credentials Object.
	*/
	$scope.deleteObject = function(_object){
		PasswordService.deleteObject(_object).then(function(response){
			$state.go($state.current, {}, {reload: true});
		});
	}
	
}]);
