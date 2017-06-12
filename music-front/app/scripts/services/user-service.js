'use strict';

/**
 * @ngdoc service
 * @name musicFrontApp.userService
 * @description
 * # userService
 * Service in the musicFrontApp.
 */
angular.module('musicFrontApp')
  .constant('userUrl', 'http://localhost:5500/users/')
  .factory('userService', [function () {
    var currentUser = null
    var setCurrentUser = function (_user) {
      currentUser = _user
    }
    var getCurrentUser = function () {
      return currentUser
    }
    return {
      setCurrentUser: setCurrentUser,
      getCurrentUser: getCurrentUser,
    }
    // var userInfo = {
    //   currentUser: {},
    //   setCurrentUser: function (_user) {
    //     console.log(_user)
    //     this.currentUser = _user
    //     console.log(this)
    //   },
    //   getCurrentUser: function () {
    //     return this.currentUser
    //   }
    // }
    // return userInfo
  }]);
