'use strict';

/**
 * @ngdoc directive
 * @name musicFrontApp.directive:recommendUserPane
 * @description
 * # recommendUserPane
 */
angular.module('musicFrontApp')
  .directive('recommendUserPane', ['$http', 'userService', function ($http, userService) {
    return {
      templateUrl: 'views/discover/recommend-user-pane.html',
      restrict: 'E',
      scope: {
      },
      controllerAs: 'rup',
      controller: function () {
        var vm = this
        vm.currentUser = userService.getCurrentUser()
        vm.loadUser = function () {
          console.log('写在控制器里面的 [recommendUserPane] 的 loadUser() 方法')
        }
      },
    };
  }]);
