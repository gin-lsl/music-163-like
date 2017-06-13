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
  /**
   * 在路由前面加上路由前缀
   */
  .filter('ngHrefPrefix', function () {
    return function (input) {
      return '/#!' + input;
    };
  })
  /**
   * 格式化时间的过滤器
   */
  .filter('myDate', function () {
    /**
     * 格式化时间
     * @param {Date} date
     */
    var formatDate = function (date) {
      return (date.getMonth() + 1) + '月' + date.getDate() + '日 ' + date.getHours() + ':' + date.getMinutes()
    }
    return function (data) {
      if (angular.isUndefined(data)) {
        console.log('isUndefined')
        return data
      }
      if (angular.isDate(data)) {
        console.log('直接就是Date类型')
        return formatDate(data)
      }
      if (angular.isNumber(data)) {
        console.log('是数字')
        return formatDate(new Date(data))
      }
      console.log('不知道是什么类型')
      return data
    }
  })
