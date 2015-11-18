function Details(peopleService, $stateParams){
	var vm = this;
	vm.person;

	peopleService.getPerson($stateParams.username).then(function(p){
		vm.person = p;
	});
}

angular.module('app').controller('Details', Details);