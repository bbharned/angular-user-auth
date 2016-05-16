(function() {
	
	"use strict";
	
	angular
	.module('partPortal')
	.controller('partnerCtrl', function($scope, Auth, currentAuth, $state, $http, $mdToast, $firebaseAuth, $rootScope) {
	  
	 $scope.greeting = 'Hola!';
	 
	 var vm = this;
	 var ref = Auth;
	 
	 vm.logUserOut = logUserOut;
	 vm.showToast = showToast;
	 vm.goToProfile = goToProfile;
	 vm.getPricing = getPricing;
	 vm.goToEvents = goToEvents;
	 vm.viewPresentations = viewPresentations;
	 
	 
	function showToast(message) {
		$mdToast.show(
			$mdToast.simple()
				.content(message).position('top, right').hideDelay(3000)
		);
	}
	
	function logUserOut() {
		ref.$unauth();
		$state.go('login');
	}
	
	function getPricing() {
		$state.go('pricing');
		$(window).scrollTop( -300 );	
	}
	
	function viewPresentations() {
		$state.go('presentations');
		$(window).scrollTop( -300 );	
	}
	
	function goToProfile() {
		$state.go('passReset');
		$(window).scrollTop( -300 );
	}
	
	
	function goToEvents() {
		$state.go('events');
		$(window).scrollTop( -300 );
	}
	
	$http.get('data/tiles.json').then(function(data) {
		$scope.tiles = data.data;
	});

});
	

})();