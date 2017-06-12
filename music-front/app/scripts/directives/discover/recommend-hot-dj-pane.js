'use strict';

/**
 * @ngdoc directive
 * @name musicFrontApp.directive:recommendHotDjPane
 * @description
 * # recommendHotDjPane
 */
angular.module('musicFrontApp')
  .directive('recommendHotDjPane', ['$http', function ($http) {
    return {
      templateUrl: 'views/discover/recommend-hot-dj-pane.html',
      restrict: 'E',
      controllerAs: 'rhdp',
      controller: function () {
        var vm = this
        vm.musicians = null
        $http.get('http://localhost:5500/users').then(function (data) {
          console.log(data)
          vm.musicians = data.data.filter(function (ele) {
            // return ele.djDescribe !== undefined && ele.djDescribe !== null && ele.djDescribe !== ''
            return (ele.djDescribe != null && ele.djDescribe != '')
          })
        })

      }
      // link: function postLink(scope, element, attrs) {
      // }
    }
  }])
