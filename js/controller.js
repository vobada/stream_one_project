// create our controller module
// create our controller module
angular.module('bandAppControllers', [])
	.controller('BandController', function ($scope) {
		// controller logic here
	})
	.controller('HomeController', function ($scope) {
		$scope.title = "Starboy Global";
	})
	.controller('ContactController', function ($scope) {
		$scope.title = "Contact Us";
		$scope.firstNameLabel = "First Name: *";
		$scope.lastNameLabel = "Last Name: *";
		$scope.emailLabel = "E-mail: *";
		$scope.messageLabel = "Message:";
		$scope.collectFormData;
		//
		$scope.storeFormData = function () {
			//
			$scope.log = console.log($scope.collectFormData);

			//
			$scope.firstNameRequired = " ";
			$scope.lastNameRequired = " ";
			$scope.emailRequired = " ";
			//
			if (!$scope.collectFormData.FirstName) {
				$scope.firstNameRequired = "First Name Required";
			}
			//
			if (!$scope.collectFormData.LastName) {
				$scope.lastNameRequired = "Last Name Required";
			}
			//
			if (!$scope.collectFormData.Email) {
				$scope.emailRequired = "E-mail Required";
			}
		};
	});

//----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------//