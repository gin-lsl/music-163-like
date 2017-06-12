'use strict';

/**
 * @ngdoc function
 * @name musicFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the musicFrontApp
 */
angular.module('musicFrontApp')
  .controller('MainCtrl', ['$scope', '$http', 'authService', 'userService', function ($scope, $http, authService, userService) {
    $scope.test = 'test in MainCtrl'
    // authService.login().then(function (data) {
    //   userService.currentUser = data.data
    // })
    // $http.get('http://localhost:5500/users/368da9d06c6aea72')
    //   .then(function (data) {
    //     // $scope.currentUser = data.data
    //     // userService.currentUser = data.data
    //     userService.setCurrentUser(data.data)
    //   })
  }]);
