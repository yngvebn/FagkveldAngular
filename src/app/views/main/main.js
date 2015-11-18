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