'use strict';

describe('Directive: discover/recommendPlaylist', function () {

  // load the directive's module
  beforeEach(module('musicFrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<discover/recommend-playlist></discover/recommend-playlist>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the discover/recommendPlaylist directive');
  }));
});
