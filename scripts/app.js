(function() {
	
	"use strict";

	angular
	.module('partPortal',['ngMaterial', 'ui.router', 'firebase'])
	.run(["$rootScope", "$state", function($rootScope, $state) {
		$rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, Auth, fromParams, error) {
		  // We can catch the error thrown when the $requireAuth promise is rejected
		  // and redirect the user back to the home page
		  if (error === "AUTH_REQUIRED") {
			$state.go("login");
		  }
		});
	}])
	.config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {

		$mdThemingProvider.theme('default')
		.primaryPalette('blue-grey')
		.accentPalette('light-blue');
		
		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('login', {
				url: '/',
				templateUrl: 'components/login.tpl.html',
				controller: 'loginCtrl as vm'
			})
			.state('register', {
				url: '/register',
				templateUrl: 'components/register.tpl.html',
				controller: 'registerCtrl as vm'
			})
			.state('pwreset', {
				url: '/reset',
				templateUrl: 'components/reset.tpl.html',
				controller: 'resetPasswordCtrl as vm'
			})
			.state('autheticated', {
				url: '/in',
				templateUrl: 'components/mainpage.tpl.html',
				controller: 'partnerCtrl as vm',
				resolve: {
				  // controller will not be loaded until $requireAuth resolves
				  // Auth refers to our $firebaseAuth wrapper in the example above
				  "currentAuth": ["Auth", function(Auth) {
					// $requireAuth returns a promise so the resolve waits for it to complete
					// If the promise is rejected, it will throw a $stateChangeError (see above)
					return Auth.$requireAuth();
				  }]
				}
			  })
			  .state('events', {
				url: '/events',
				templateUrl: 'components/events.tpl.html',
				controller: 'eventsCtrl as vm',
				resolve: {
				  // controller will not be loaded until $requireAuth resolves
				  // Auth refers to our $firebaseAuth wrapper in the example above
				  "currentAuth": ["Auth", function(Auth) {
					// $requireAuth returns a promise so the resolve waits for it to complete
					// If the promise is rejected, it will throw a $stateChangeError (see above)
					return Auth.$requireAuth();
				  }]
				}
			  })
			  .state('presentations', {
				url: '/presentations',
				templateUrl: 'components/presentations.tpl.html',
				controller: 'presentationsCtrl as vm',
				resolve: {
				  // controller will not be loaded until $requireAuth resolves
				  // Auth refers to our $firebaseAuth wrapper in the example above
				  "currentAuth": ["Auth", function(Auth) {
					// $requireAuth returns a promise so the resolve waits for it to complete
					// If the promise is rejected, it will throw a $stateChangeError (see above)
					return Auth.$requireAuth();
				  }]
				}
			  })
			  .state('pricing', {
				url: '/pricing',
				templateUrl: '../../wonderware/resources/components/profile/pricing.tpl.html',
				controller: 'pricingCtrl as vm',
				resolve: {
				  // controller will not be loaded until $requireAuth resolves
				  // Auth refers to our $firebaseAuth wrapper in the example above
				  "currentAuth": ["Auth", function(Auth) {
					// $requireAuth returns a promise so the resolve waits for it to complete
					// If the promise is rejected, it will throw a $stateChangeError (see above)
					return Auth.$requireAuth();
				  }]
				}
			  })
			  .state('passReset', {
				url: '/profile/user',
				templateUrl: 'components/profile/main.profile.tpl.html',
				controller: 'profileCtrl as vm',
				resolve: {
				  // controller will not be loaded until $requireAuth resolves
				  // Auth refers to our $firebaseAuth wrapper in the example above
				  "currentAuth": ["Auth", function(Auth) {
					// $requireAuth returns a promise so the resolve waits for it to complete
					// If the promise is rejected, it will throw a $stateChangeError (see above)
					return Auth.$requireAuth();
				  }]
				}
			  });
			
});


})();