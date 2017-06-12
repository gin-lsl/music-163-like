'use strict';

describe('Service: appName', function () {

  // load the service's module
  beforeEach(module('musicFrontApp'));

  // instantiate service
  var appName;
  beforeEach(inject(function (_appName_) {
    appName = _appName_;
  }));

  it('should do something', function () {
    expect(!!appName).toBe(true);
  });

});
