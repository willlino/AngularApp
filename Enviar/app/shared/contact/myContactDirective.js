(function(){
	'use strict';

	angular.module('app').directive('myContact', function(){
		return{
			templateUrl: '/app/shared/contact/myContactView.html',
			scope:{
				contact: '='
			},
			restrict: 'E',
			controller:'ContactController' 
		}
	});
})();

