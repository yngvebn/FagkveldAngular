angular.module('app').filter('capitalize', function(){
	return function(input){
		return _.capitalize(input);
	}
})