'use strict';

/**
 * @ngdoc filter
 * @name musicFrontApp.filter:wan
 * @function
 * @description
 * # wan 如果数字大于10万，则显示 x万
 * Filter in the musicFrontApp.
 */
angular.module('musicFrontApp')
  .filter('wan', function () {
    return function (data) {
      if (angular.isDefined(data) && angular.isNumber(data)) {
        return data > 100000 ? (data / 10000) + '万' : data
      }
      return data
    };
  });
