'use strict';

describe('Directive: discover/recommendUserPane', function () {

  // load the directive's module
  beforeEach(module('musicFrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<discover/recommend-user-pane></discover/recommend-user-pane>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the discover/recommendUserPane directive');
  }));
});
