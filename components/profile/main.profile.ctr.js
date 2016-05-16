(function() {
	
	"use strict";
	
	
	angular
	.module('partPortal')
	.controller('profileCtrl', function($scope, $state, Auth, $rootScope, $mdDialog) {
		
		
		var vm = this;
		
		vm.goHome = goHome;
		vm.showAlert = showAlert;
		vm.changePassword = changePassword;
		
		
		if ($rootScope.temppw) {
			$scope.temppassword = $rootScope.temppw;	
			$scope.email = $rootScope.email;
		} 
		
		
		function changePassword(email, oldPassword, newPassword) {
			if ($scope.newpassword === $scope.newpassconfirm) {
				Auth.$changePassword({
					email: email,
					oldPassword: oldPassword,
					newPassword: newPassword
				}).then(function() {
					
					showAlert("Password Changed", "your password has been set as desired.");
					$state.go("autheticated");
					
				}).catch(function(error) {
					showAlert("Oops!", "Seems there was a problem setting your new password.");
					console.log("Password Change Error: ", error);
				});
			} else {
				showAlert("Passwords Must Match", "It looks like the passwords you typed did not match.  please try again.");
				$scope.newpassword = "";
				$scope.newpassconfirm = "";
			}
		}
		
		
		function goHome() {
			$state.go("autheticated");	
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