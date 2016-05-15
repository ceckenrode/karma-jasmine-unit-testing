//We describe our test Suite, passing in a title and callback
describe('Testing Angular Js Test Suite', function() {

  //before each test, we grabe our module
  beforeEach(module('testingAngularApp'));

  //we describe our controller test and pass a callback
  describe('Testing Angular Js Controller', function() {
    //we define the variables we will use globally
    var scope, ctrl, httpBackend;
    //we for each test we run, we inject our scope and controller variables
    //scope becomes an angular $scope
    //ctrl becomes and angular controller
    //httpBackend = $httpBackend
    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
      scope = $rootScope.$new();
      ctrl = $controller('testingAngularCtrl', {
        $scope: scope
      });
      httpBackend = $httpBackend;
    }));

    afterEach(function() {
      //cleanUp code goes here if we need it

      //we make sure there are no outstanding expectations for httpBackend
      //verify there are no outstanding requests for httpbackend
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    //we define our test condition and pass a callback
    it('should initialize the title in the scope', function() {
      //we expect the title to be defined
      //we expect the title to be this speciifc text
      expect(scope.title).toBeDefined();
      expect(scope.title).toBe("testing angular js applications");
    });

    it('should add 2 destinations to the destinations list', function() {

      expect(scope.destinations).toBeDefined();
      expect(scope.destinations.length).toBe(0);

      scope.newDestination = {
        city: "London",
        country: "England"
      };

      scope.addDestination();

      expect(scope.destinations.length).toBe(1);
      expect(scope.destinations[0].city).toBe("London");
      expect(scope.destinations[0].country).toBe("England");

      scope.newDestination = {
        city: "Frankfurt",
        country: "Germany"
      };

      scope.addDestination();

      expect(scope.destinations.length).toBe(2);
      expect(scope.destinations[1].city).toBe("Frankfurt");
      expect(scope.destinations[1].country).toBe("Germany");

    });

    it('should remove a destination from the destinations list', function() {
      scope.destinations = [{
        city: "Paris",
        country: "France"
      }, {
        city: "Warsaw",
        country: "Poland"
      }];

      expect(scope.destinations.length).toBe(2);

      scope.removeDestination(0);

      expect(scope.destinations.length).toBe(1);

      expect(scope.destinations[0].city).toBe("Warsaw");
      expect(scope.destinations[0].country).toBe("Poland");
    });

    it('should update the weather for a specific destination', function(){
      //setting up a starter destination
      scope.destination = {
        city: "Melbourne",
        country: "Austrailia"
      };

      //mocking a get request. the respond is a placeholder response.data
      httpBackend.expectGET("http://api.openweathermap.org/data/2.5/weather?q=" + scope.destination.city + "&appid=" +
        scope.apiKey).respond({
          weather: [{main: "Rain", detail: "Light rain"}],
          main: {temp: 288}
        });

      //doing the mock request
      scope.getWeather(scope.destination);

      //must flush the request after making
      httpBackend.flush();
      expect(scope.destination.weather.main).toBe("Rain");
      expect(scope.destination.weather.temp).toBe(15);
    });
  });
});
