'use strict';

describe('Controller: PlaylistOrAlbumCtrl', function () {

  // load the controller's module
  beforeEach(module('musicFrontApp'));

  var PlaylistOrAlbumCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlaylistOrAlbumCtrl = $controller('PlaylistOrAlbumCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PlaylistOrAlbumCtrl.awesomeThings.length).toBe(3);
  });
});
