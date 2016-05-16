(function() {
	
	"use strict";
	
	angular
	.module('partPortal')
	.controller('loginCtrl', function($scope, $state, $mdToast, Auth, fbArray, $http, $firebaseAuth, $rootScope) {
		
		var vm = this;
		var ref = Auth;
		var record = fbArray;
		
		
		vm.newUserScreen = newUserScreen;
		vm.login = login;
		vm.showToast = showToast;
		vm.toReset = toReset;
		vm.recordLogin = recordLogin;
		
		
		function newUserScreen() {
			$state.go('register');		
		}
		
		function toReset() {
			$state.go('reset');
		}
		
		function recordLogin(email,uid) {
			var time = (new Date().toString());
			record.$add({
				"email":email,
				"uid": uid,
				"time": time
			});
		}
		
		function showToast(message) {
			$mdToast.show(
				$mdToast.simple()
					.content(message)
					.position('top, right')
					.hideDelay(3000)
			);
		}
		
		
		function login(email, password) {
			  
			  email = $scope.useremail;
			  password = $scope.userpw;
			  
			  $scope.authData = null;
			  $scope.error = null;
		
			  ref.$authWithPassword({
				  email: email,
				  password: password
				}).then(function(authData) {
				  
					if (authData.password.isTemporaryPassword) {
						$rootScope.email = email;
						$rootScope.temppw = password;
						recordLogin(email,authData.uid);
						$state.go('passReset');
					
					} else {
						$rootScope.email = email;
						recordLogin(email,authData.uid);
						$state.go('autheticated');
						
						
					}
				  
				}).catch(function(error) {
				  	console.error("Authentication failed:", error);
					showToast("Sorry, that did not match our records");
			});
    	}
		
		
		
		
	});
	
})();