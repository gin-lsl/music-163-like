'use strict';

describe('Directive: discover/recommendPlaylistNews', function () {

  // load the directive's module
  beforeEach(module('musicFrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<discover/recommend-playlist-news></discover/recommend-playlist-news>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the discover/recommendPlaylistNews directive');
  }));
});
