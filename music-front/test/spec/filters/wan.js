'use strict';

describe('Filter: wan', function () {

  // load the filter's module
  beforeEach(module('musicFrontApp'));

  // initialize a new instance of the filter before each test
  var wan;
  beforeEach(inject(function ($filter) {
    wan = $filter('wan');
  }));

  it('should return the input prefixed with "wan filter:"', function () {
    var text = 'angularjs';
    expect(wan(text)).toBe('wan filter: ' + text);
  });

});
