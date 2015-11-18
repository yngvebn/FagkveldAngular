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