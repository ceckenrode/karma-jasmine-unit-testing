var testingAngularApp = angular.module("testingAngularApp", []);
testingAngularApp.controller("testingAngularCtrl", function($rootScope, $scope, $http) {
  $scope.title = "testing angular js applications";

  $scope.apiKey = "102daf972f87ab6d4788fac310d99567";

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

  $scope.getWeather = function(destination) {
    $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + destination.city + "&appid=" +
      $scope.apiKey).then(
      function successCallback(response) {
        if (response.data.weather) {
          destination.weather = {};
          destination.weather.main = response.data.weather[0].main;
          destination.weather.temp = $scope.convertKelvinToCelcius(response.data.main.temp);
          console.log($scope.destinations);
        }

      },
      function errorCallback(error) {
        console.log(err);
      });
  };

  $scope.convertKelvinToCelcius = function (temp) {
    return Math.round(temp - 273);
  };
});
