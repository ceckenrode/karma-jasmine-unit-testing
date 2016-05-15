var testingAngularApp = angular.module("testingAngularApp", []);
testingAngularApp.controller("testingAngularCtrl", function($rootScope, $scope) {
  $scope.title = "testing angular js applications";

  $scope.destinations = [];

  $scope.newDestination = {
    city: undefined,
    country: undefined
  };

  $scope.addDestination = function() {
    $scope.destinations.push({
      city: $scope.newDestination.city,
      country: $scope.newDestination.country
    });
  };

  $scope.removeDestination = function(index) {
    $scope.destinations.splice(index, 1);
  };
});
