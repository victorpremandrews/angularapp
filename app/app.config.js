'use strict'

angular
	.module('tiApp')
	.config(['$routeProvider', '$locationProvider', 
		function config($routeProvider, $locationProvider){
			$locationProvider.hashPrefix("!");
			$routeProvider
				.when("/", {
					template: '<h1>Hi</h1>'
				})
				.otherwise({
					redirectTo: "/"
				}
			);
		}
	]
);
