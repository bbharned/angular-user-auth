(function() {
	
	"use strict";
	
	angular
	.module('partPortal')
	.controller('presentationsCtrl', function($scope, $state) {
		
		var vm = this;
		vm.goHome = goHome;
		
		function goHome() {
			$state.go("autheticated");	
		}
		
		
	});
})();