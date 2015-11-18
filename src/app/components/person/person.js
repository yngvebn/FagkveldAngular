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