'use strict';

describe('Directive: discover/recommendPlaylistToplist', function () {

  // load the directive's module
  beforeEach(module('musicFrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<discover/recommend-playlist-toplist></discover/recommend-playlist-toplist>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the discover/recommendPlaylistToplist directive');
  }));
});
