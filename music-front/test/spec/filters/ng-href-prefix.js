'use strict';

describe('Filter: ngHrefPrefix', function () {

  // load the filter's module
  beforeEach(module('musicFrontApp'));

  // initialize a new instance of the filter before each test
  var ngHrefPrefix;
  beforeEach(inject(function ($filter) {
    ngHrefPrefix = $filter('ngHrefPrefix');
  }));

  it('should return the input prefixed with "ngHrefPrefix filter:"', function () {
    var text = 'angularjs';
    expect(ngHrefPrefix(text)).toBe('ngHrefPrefix filter: ' + text);
  });

});
