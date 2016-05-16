(function() {
	
	"use strict";
	
	angular
	.module('partPortal')
	.controller('resetPasswordCtrl', function($scope, $state, $http, $mdDialog, $firebaseAuth, Auth) {
		
		var vm = this;
		vm.resetRequest = resetRequest;
		vm.loginUserScreen = loginUserScreen;
		vm.showAlert = showAlert;
		
		function loginUserScreen() {
			$state.go('login');	
		}
		
		
		function resetRequest(email) {
			
			Auth.$resetPassword({
			  email: email
			}).then(function() {
			  showAlert("Email Sent", "Check your email, you have been sent a temporary password and instructions.");
			  $scope.pwResetEmail = "";
			  $state.go("login");
			}).catch(function(error) {
			  console.error("Error: ", error);
			  showAlert("Error Ocurred", "there seems to have been an error requesting the reset email.");
			});
			
		}
		
		
		function showAlert(title, message) {
			$mdDialog.show($mdDialog.alert()
				.parent(angular.element(document.querySelector('#popupContainer')))
				.clickOutsideToClose(true)
				.title(title)
				.textContent(message)
				.ariaLabel('Alert Dialog')
				.ok('Got it!')
			);
		}
		
		
		
	});
	
})();