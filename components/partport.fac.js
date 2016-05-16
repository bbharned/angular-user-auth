(function() {

	"use strict";

	angular
		.module("partPortal")
		.factory("Auth", function($http, $firebaseAuth) {
			
			var ref = new Firebase('https://rockwell-portal.firebaseio.com');
			return $firebaseAuth(ref);
	
		});
		
	angular
		.module("partPortal")
		.factory("fbArray", function($http, $firebaseArray) {
			
			var reference = new Firebase('https://rockwell-portal.firebaseio.com');
			return $firebaseArray(reference);
		
		});	
		
	angular
		.module("partPortal")
		.factory("Tiles", function($scope, $http) {
			
			$http.get('data/tiles.json').then(function(data) {
				//$scope.tiles = data;
				console.log(data);
			});
			
		});	

})();