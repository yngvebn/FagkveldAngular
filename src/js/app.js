angular.module('app', ['ui.router']);
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
angular.module('app').filter('capitalize', function(){
	return function(input){
		return _.capitalize(input);
	}
})
function peopleService($http, $q){

	var service = {
		getPeople: getPeople,
		getPerson: getPerson
	}

	var people;

	function getPerson(username){
		return $q(function(resolve){
			getPeople().then(function(list){
				resolve(_.find(list, { username: username }));	
			});
		});
	}

	function fetchFromApi(){
		return $http.get('http://api.randomuser.me/?results=20&seed=fagkveld&nat=us').then(function(res){
			people = _.pluck(res.data.results, 'user');
			return people;
		});
	}

	function getPeople(){
		return $q.when(people || fetchFromApi());		
	}

	return service;
}

angular.module('app').factory('peopleService', peopleService);
function PersonController(){
}
angular.module('app').controller('PersonController', PersonController);
angular.module('app').directive('person', function(){
	return {
		replace: true,
		restrict: 'E',
		controller: 'PersonController',
		controllerAs: 'person',
		templateUrl: '/app/components/person/person.tpl.html',
		bindToController: true,
		scope: {
			person: '=',
			onSelect: '&'
		}
	}
});
function Details(peopleService, $stateParams){
	var vm = this;
	vm.person;

	peopleService.getPerson($stateParams.username).then(function(p){
		vm.person = p;
	});
}

angular.module('app').controller('Details', Details);
function Main(peopleService, $state){
	var vm = this;
	vm.people = [];
	vm.selectPerson = selectPerson;
	peopleService.getPeople().then(function(people){
		vm.people = people;
	});

	function selectPerson(person){
		$state.go('details', { username: person.username });
	}
}

angular.module('app').controller('Main', Main);