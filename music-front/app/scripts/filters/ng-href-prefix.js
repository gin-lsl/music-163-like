'use strict';

/**
 * @ngdoc filter
 * @name musicFrontApp.filter:ngHrefPrefix
 * @function
 * @description 在 ng-href 路径前面加上前缀, '/test' | ngHrefPrefix => /#!/test
 * # ngHrefPrefix
 * Filter in the musicFrontApp.
 */
angular.module('musicFrontApp')
  .filter('ngHrefPrefix', function () {
    return function (input) {
      return '/#!' + input;
    };
  });
