(function(){
	'use strict';

	angular.module('app').controller('ContactController', function($scope, ContactRepository){
		$scope.getContacts = getContacts();

		function getContacts(){
			ContactRepository.get()
				.then(function(data){
					$scope.contacts = data.data;

				}, function(error){
					console.log(error);
				});

		function editContact(contact){

		}

		function deleteContact(contact){

		}


		}
	});
})()