'use strict';

/**
 * @ngdoc service
 * @name musicFrontApp.authService
 * @description
 * # authService
 * Service in the musicFrontApp.
 */
angular.module('musicFrontApp')
  .service('authService', ['$http', 'userService', function ($http, userService) {
    this.login = function () {
      return $http.get('http://localhost:5500/users/368da9d06c6aea72')
        // .then(function (data) {
        //   console.log(data)
        //   userService.currentUser = data.data
        // })
    }
  }]);
