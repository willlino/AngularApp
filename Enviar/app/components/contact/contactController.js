(function(){
	'use strict';

	angular.module('app').controller('ContactController', function($scope, ContactRepository){
		$scope.contact = {
		}
		$scope.btnAddContactText = "Add Contact";
		$scope.showAddress = false;
		$scope.showCompany = false;

		// If it is like this, it will execute when the controller is initialized
		getContacts();

		// If it is like this, it will execute only when the function is called
		$scope.save = function(){
			saveContact();
		}

		$scope.add = function(){
			addContact();
		}

		$scope.edit = function(contact){
			editContact(contact);
		}

		$scope.delete = function(contact){
			deleteContact(contact);
		}

		$scope.showHideAddress = function(contactId){
			showHideAddress(contactId);
		}

		$scope.showHideCompany = function(contactId){
			showHideCompany(contactId);
		}


		
		function getContacts(){
			ContactRepository.get()
				.then(function(data){
					$scope.contacts = data.data;
					//console.log(data.data);

				}, function(error){
					console.log(error);
				});		
		}

		function saveContact(){
			if($scope.contactForm.$invalid)
				return;

			console.log($scope.contact.id);	
			// If don't have an id, insert a new contact, else update
			if($scope.contact.id == undefined || $scope.contact.id == ''){
				ContactRepository.post($scope.contact)
				.then(function(data){
					console.log('The API does not allow to insert/update items');
					delete $scope.contact;
					setFormsToPristine();
					showHideContactForm();
					$scope.contacts = getContacts();
				}, function(error){
					console.log(error);
				});
			}else{
				ContactRepository.put($scope.contact)
				.then(function(data){
					console.log('The API does not allow to insert/update items');
					delete $scope.contact;
					showHideContactForm();
					$scope.contacts = getContacts();
				}, function(error){
					console.log(error);
				});
			}
		}

		function deleteContact(contact){
			$scope.contact = { 
				id: contact.id,
				name: contact.name,
				email: contact.email,
				phone: contact.phone,
			    username: contact.username,
				website: contact.website
			};

			ContactRepository.delete($scope.contact)
				.then(function(data){
					console.log('The API does not allow to remove data');
					$scope.contacts = getContacts();
				}, function(error){
					console.log(error);
				});
		}

		// Show form to add contact
		function addContact(){
			delete $scope.contact;

			showHideContactForm();
		}

		// Show form to edit contact
		function editContact(contact){
			$scope.contact = {
				id: contact.id,
				name: contact.name,
				email: contact.email,
				phone: contact.phone,
			    username: contact.username,
				website: contact.website,
				address: contact.address,
				company: contact.company
			};

			$scope.contactFormVisible = true;
			$scope.btnAddContactText = "Cancel";
		}

		function showHideContactForm(){
			changeContactButtonVisibility();
			changeContactButtonText();
		}

		function changeContactButtonText(){
			var isVisible = $scope.contactFormVisible;

			if(isVisible)
				$scope.btnAddContactText = "Cancel";
			else
				$scope.btnAddContactText = "Add Contact";
		}

		function changeContactButtonVisibility(){
			$scope.contactFormVisible = !$scope.contactFormVisible;
		}

		function showHideAddress(id){
			var showAddressId = 'showAddress' + id;

			$scope[showAddressId] = !$scope[showAddressId];
		}

		function showHideCompany(id){
			var showCompanyId = 'showCompany' + id;

			$scope[showCompanyId] = !$scope[showCompanyId];
		}

		function setFormsToPristine(){
			$scope.contactForm.$setPristine();
			$scope.addressForm.$setPristine();
			$scope.companyForm.$setPristine();
		}
	});
})();