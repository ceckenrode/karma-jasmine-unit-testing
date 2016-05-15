//We describe our test Suite, passing in a title and callback
describe('Testing Angular Js Test Suite', function() {

//before each test, we grabe our module
  beforeEach(module('testingAngularApp'));

//we describe our controller test and pass a callback
  describe('Testing Angular Js Controller', function() {
//we define the variables we will use globally
    var scope, ctrl;
//we for each test we run, we inject our scope and controller variables
//scope becomes an angular $scope
//ctrl becomes and angular controller

    beforeEach(inject(function($controller, $rootScope){
      scope = $rootScope.$new();
      ctrl = $controller('testingAngularCtrl', {$scope: scope});
    }));
//we define our test condition and pass a callback
    it('should initialize the title in the scope', function(){
//we expect the title to be defined
//we expect the title to be this speciifc text
      expect(scope.title).toBeDefined();
      expect(scope.title).toBe("testing angular js applications");
    });
  });
});
