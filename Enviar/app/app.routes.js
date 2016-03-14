(function(){
	'use strict';

	angular.module('app').config(function($routeProvider){
		$routeProvider
		  .when('/', {
		  	controller:'HomeController',
		  	controllerAs:'vm',
		  	templateUrl: 'app/components/home/homeView.html'
		  })
		  .when('/home', {
		  	controller:'HomeController',
		  	controllerAs:'vm',
		  	templateUrl: 'app/components/home/homeView.html'
		  })
		  .when('/contact',{
		  	controller:'ContactController',
		  	controllerAs:'vm',
		  	templateUrl:'app/components/contact/contactView.html'
		  })
		  .otherwise({
		  	controller:'HomeController',
		  	controllerAs:'vm',
		  	templateUrl:'app/components/home/404.html'
		  });
	})
})();