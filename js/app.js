// define our application
angular.module("bandApp", ['ngRoute', 'bandAppControllers', 'bandAppDirectives'])
	.config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);  // enable href routing without hashes
		// route our application
		$routeProvider        
			.when('/home', {
				templateUrl: "templates/home.html",
				controller: "HomeController"
			})
			.when('/touring', {
				templateUrl: "templates/tour-info.html",
				controller: "TourController"
			})
			.when('/contact', {
				templateUrl: "templates/services.html",
				controller: "ContactController"
			})
			.otherwise({
				redirectTo: '/home'
			});
	});