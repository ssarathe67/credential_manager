var app = angular.module('app',['ui.router']);

app.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/dashboard')
	$stateProvider	
	.state('addNewCredential',  { 
        url : '/addNewCredential',
        templateUrl: '/pages/add_new_credentials.html',
	})
	.state('manageCredential',  { 
        url : '/manageCredential',
        templateUrl: '/pages/manage_credentials.html',
	})
	.state('editCredential',  { 
        url : '/editCredential/:objectId',
        templateUrl: '/pages/add_new_credentials.html',
	})
	.state('copyCredential',  { 
        url : '/copyCredential/:objectId/:action',
        templateUrl: '/pages/add_new_credentials.html',
	})
	.state('dashboard',  { 
        url : '/dashboard',
        templateUrl: '/pages/dashboard.html',
	})
}]);


