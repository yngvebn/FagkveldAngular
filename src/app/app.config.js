angular.module('app').config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$stateProvider.state('main', {
		url: '/',
		controller: 'Main',
		controllerAs: 'main',
		templateUrl: '/app/views/main/main.tpl.html'
	})
	.state('details', {
		url:'/people/:username',
		controller: 'Details',
		controllerAs: 'details',
		templateUrl: '/app/views/details/details.tpl.html'
	});

	$urlRouterProvider.otherwise('/');
	
})