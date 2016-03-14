(function(){
	'use strict';

	angular.module('app').factory('ContactRepository', function($http){
	var urlBase = 'http://jsonplaceholder.typicode.com/users';
	var contact = {
		email: "",
		id: "",
		name: ""};
		var repository = {
		get: getContacts,
		post: postContact(contact),
		put: putContact(contact),
		// delete: deleteContact(id)
		};
		
		return repository;
		
		function getContacts(){
			return $http.get(urlBase);
		}
		
		function postContact(contact){
			return $http.post(urlBase, contact);
 		}
		
		function putContact(contact){
		}
		// function deleteContact(id){
		// }
	});
})();