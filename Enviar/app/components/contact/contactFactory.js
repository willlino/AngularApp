(function(){
	'use strict';

	angular.module('app').factory('ContactRepository', function($http){

	var urlBase = 'http://jsonplaceholder.typicode.com/users/';

	var repository = {
		get: getContacts,
		post: postContact,
		put: putContact,
		delete: deleteContact
	}
	return repository;


	function getContacts(){
		return $http.get(urlBase);
	}

	function postContact(contact){
		return $http.post(urlBase, contact);
    }

	function putContact(contact){
		return $http.put(urlBase + contact.id, contact);
	}

	function deleteContact(contact){
		return $http.delete(urlBase + contact.id);
	}

	});

	// function newContact(){
	// 	var contact = {
	// 	id: "",
	// 	name: "",
	// 	email: "",
	// 	phone: "",
	//     username: "",
	// 	website: ""
	// 	};
	// }
})();