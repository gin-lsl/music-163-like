'use strict';

describe('Directive: playlistCoverSmall', function () {

  // load the directive's module
  beforeEach(module('musicFrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<playlist-cover-small></playlist-cover-small>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the playlistCoverSmall directive');
  }));
});
