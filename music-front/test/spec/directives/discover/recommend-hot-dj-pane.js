'use strict';

describe('Directive: discover/recommendHotDjPane', function () {

  // load the directive's module
  beforeEach(module('musicFrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<discover/recommend-hot-dj-pane></discover/recommend-hot-dj-pane>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the discover/recommendHotDjPane directive');
  }));
});
