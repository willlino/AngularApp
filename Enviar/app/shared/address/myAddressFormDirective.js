(function(){
	'use strict';

	angular.module('app').directive('myAddressForm', function(){
		return{
			templateUrl: 'app/shared/address/myAddressFormView.html',
			scope:{
				contact: '='
			},
			restrict: 'E',
			controller: 'ContactController'
		}
	});
})()