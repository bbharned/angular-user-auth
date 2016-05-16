(function() {
	
	"use strict";
	
	angular
	.module('partPortal')
	.controller('pricingCtrl', function($scope, $state) {
		
		var vm = this;
		vm.goHome = goHome;
		
		function goHome() {
			$state.go("autheticated");	
		}
		
		
	});
	
})();