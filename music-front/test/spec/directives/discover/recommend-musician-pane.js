'use strict';

describe('Directive: discover/recommendMusicianPane', function () {

  // load the directive's module
  beforeEach(module('musicFrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<discover/recommend-musician-pane></discover/recommend-musician-pane>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the discover/recommendMusicianPane directive');
  }));
});
