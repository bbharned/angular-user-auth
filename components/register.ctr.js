(function() {
	
	"use strict";
	
	angular
	.module('partPortal')
	.controller('registerCtrl', function($scope, $state, Auth, $http, $firebaseAuth, $mdDialog, fbArray) {
		
		var vm = this;
		
		var ref = Auth;
		var stats = fbArray;
		
		vm.createUser = createUser;
		vm.loginUserScreen = loginUserScreen;
		vm.login = login;
		vm.showAlert = showAlert;
		vm.checkForm = checkForm;
		
		
		
		function loginUserScreen() {
			$state.go('login');	
		}
		
		
		function login(email, password) {
			  $scope.authData = null;
			  $scope.error = null;
		
			  ref.$authWithPassword({
				  email: email,
				  password: password
				}).then(function(authData) {
					console.log("Logged in as:", authData.uid);
				}).catch(function(error) {
				  console.error("Login function failed:", error);
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
		
		
		
		
		function checkForm() {
      		if ($scope.registerpassword !== $scope.reenterpassword) {
				
				showAlert("Passwords Do Not Match", "The passwords you entered do not match.  Please try again");
				$scope.registerpassword = "";
				$scope.reenterpassword = "";
				
			} else {
				createUser();
			}
		}
		
		
		
		function createUser() {
				
			var newUser = {
				name: $scope.registername,
				company: $scope.registercompany,
				email: $scope.registeremail,
				password: $scope.registerpassword
			};
			
			$scope.message = null;
      		$scope.error = null;
			
			ref.$createUser({
				name: newUser.name,
				company: newUser.company,
				email: newUser.email,
				password: newUser.password
			}).then(function(userData) {
				console.log("User created with uid: " + userData.uid);
				if (userData.uid !== null) {
				  
				  login(newUser.email, newUser.password);
				  
				  stats.$add({
					"name":newUser.name,
					"company":newUser.company,
					"email":newUser.email,
					"uid":userData.uid
				  });
				  
				  if ($scope.message === null || $scope.message !== null) {
				  	$state.go('autheticated');
				  }
				  
				}
			}).catch(function(error) {
				$scope.registername = "";
				$scope.registercompany = "";
				$scope.registeremail = "";
				$scope.registerpassword = "";
				$scope.reenterpassword = "";
				showAlert("Error Ocurred", "Oops! That email may be be taken or another error has occured.");
				console.log("User creation error: ", error);
			});
			
	 
	 	}
		
		
		
		
	});
	
})();