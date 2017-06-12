'use strict';

describe('Controller: DiscoverDiscoverCtrl', function () {

  // load the controller's module
  beforeEach(module('musicFrontApp'));

  var DiscoverDiscoverCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DiscoverDiscoverCtrl = $controller('DiscoverDiscoverCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DiscoverDiscoverCtrl.awesomeThings.length).toBe(3);
  });
});
