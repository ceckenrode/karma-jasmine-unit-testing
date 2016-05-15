describe('Testing Angular Js Test Suite', function() {
  describe('Testing Angular Js Controller', function() {

    it('should initialize the title in the scope', function(){
      module('testingAngularApp');

      var scope = {};
      var ctrl;

      inject(function($controller){
        ctrl = $controller('testingAngularCtrl', {$scope: scope});
      });
      expect(scope.title).toBeDefined();
      expect(scope.title).toBe("testing angular js applications");
    });
  });
});
